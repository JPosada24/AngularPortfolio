const { Resend } = require('resend');

exports.handler = async (event) => {
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: JSON.stringify({ success: false, error: 'method_not_allowed' }) };
	}

	let body;
	try {
		body = JSON.parse(event.body || '{}');
	} catch {
		return { statusCode: 400, body: JSON.stringify({ success: false, error: 'invalid_json' }) };
	}

	const { name, email, message } = body;

	if (
		typeof name !== 'string' || name.trim().length < 3 ||
		typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
		typeof message !== 'string' || message.trim().length < 20
	) {
		return { statusCode: 400, body: JSON.stringify({ success: false, error: 'invalid_input' }) };
	}

	const resendApiKey = process.env.RESEND_API_KEY;
	const contactToEmail = process.env.CONTACT_TO_EMAIL || 'julian_2120@hotmail.com';

	if (!resendApiKey) {
		console.error('RESEND_API_KEY is not configured in Netlify environment variables.');
		return { statusCode: 500, body: JSON.stringify({ success: false, error: 'email_not_configured' }) };
	}

	const resend = new Resend(resendApiKey);

	try {
		const { error } = await resend.emails.send({
			from: 'Portafolio <onboarding@resend.dev>',
			to: contactToEmail,
			reply_to: email,
			subject: `${name} está interesado en hablar sobre proyectos`,
			html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Correo:</strong> ${email}</p><p>${message}</p>`,
		});

		if (error) {
			console.error('Resend rejected the email', error);
			return { statusCode: 502, body: JSON.stringify({ success: false, error: 'send_failed' }) };
		}

		return { statusCode: 200, body: JSON.stringify({ success: true }) };
	} catch (error) {
		console.error('Error sending contact email', error);
		return { statusCode: 502, body: JSON.stringify({ success: false, error: 'send_failed' }) };
	}
};
