import 'dotenv/config';
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { Resend } from 'resend';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  server.use(express.json());

  const resendApiKey = process.env['RESEND_API_KEY'];
  const contactToEmail = process.env['CONTACT_TO_EMAIL'] || 'julian_2120@hotmail.com';
  const resend = resendApiKey ? new Resend(resendApiKey) : null;

  server.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body ?? {};

    if (
      typeof name !== 'string' || name.trim().length < 3 ||
      typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof message !== 'string' || message.trim().length < 20
    ) {
      res.status(400).json({ success: false, error: 'invalid_input' });
      return;
    }

    if (!resend) {
      console.error('RESEND_API_KEY is not configured on the server.');
      res.status(500).json({ success: false, error: 'email_not_configured' });
      return;
    }

    try {
      await resend.emails.send({
        from: 'Portafolio <onboarding@resend.dev>',
        to: contactToEmail,
        reply_to: email,
        subject: `${name} está interesado en hablar sobre proyectos`,
        html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Correo:</strong> ${email}</p><p>${message}</p>`,
      });

      res.json({ success: true });
    } catch (error) {
      console.error('Error sending contact email', error);
      res.status(502).json({ success: false, error: 'send_failed' });
    }
  });

  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
