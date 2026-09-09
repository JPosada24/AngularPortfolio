# Julian Posada — Portafolio

Portafolio web personal construido con **Angular 17** (standalone components + SSR/hidratación), **PrimeNG** y **PrimeFlex**. Presenta mi perfil profesional, experiencia, habilidades y proyectos, con un formulario de contacto funcional respaldado por [Resend](https://resend.com).

🔗 **Demo en vivo:** https://juposadadev.netlify.app

Desplegado en **Netlify** como sitio estático (Angular con prerender), con el formulario de contacto respaldado por una **Netlify Function** (`netlify/functions/contact.js`) en lugar de un servidor persistente.

## Tech stack

- **Framework:** Angular 17 (standalone components, Angular Universal / SSR)
- **UI:** PrimeNG, PrimeFlex, PrimeIcons
- **Formularios:** Reactive Forms con validación
- **Backend ligero:** Express (`server.ts`, para SSR local/otros hostings) **y** una Netlify Function (`netlify/functions/contact.js`, usada en producción) — ambos implementan el mismo endpoint `POST /api/contact`
- **Email:** Resend (envío de correos desde el servidor/función, nunca desde el cliente)

## Estructura del sitio

| Ruta         | Contenido                                              |
| ------------ | ------------------------------------------------------- |
| `/home`      | Hero, servicios y proyectos destacados                  |
| `/about`     | Sobre mí, habilidades técnicas y línea de tiempo laboral |
| `/portfolio` | Galería completa de proyectos con enlaces a código/demo  |
| `/contact`   | Formulario de contacto                                  |

## Desarrollo local

```bash
npm install
npm start          # ng serve en http://localhost:4200
```

Con solo `npm start` el sitio se ve y navega normalmente, **pero el formulario de contacto no podrá enviar correos** — `/api/contact` solo existe en el servidor Express (SSR), no en `ng serve`.

Para probar el formulario de contacto en local, en una **segunda terminal**:

```bash
npm run serve:api   # build + servidor Express en http://localhost:4000
```

`ng serve` ya tiene configurado un proxy (`proxy.conf.json`) que reenvía `/api/*` a `http://localhost:4000`, así que con ambos procesos corriendo el formulario funciona igual que en producción. Asegúrate de tener `.env` configurado (ver siguiente sección) antes de probarlo.

Alternativa más simple: correr solo `npm run serve:api` y abrir `http://localhost:4000` — ahí todo funciona (SSR + contacto) sin necesitar `ng serve` en paralelo.

## Variables de entorno

Copia `.env.example` a `.env` (o configura estas variables en tu proveedor de hosting) antes de desplegar:

| Variable          | Descripción                                                        |
| ----------------- | -------------------------------------------------------------------- |
| `RESEND_API_KEY`  | API key de Resend, usada **solo en el servidor** para enviar correos |
| `CONTACT_TO_EMAIL`| Correo que recibe los mensajes del formulario de contacto            |

**Nunca** se debe exponer la API key de Resend (ni ninguna credencial) en código del cliente (componentes, HTML, JS del navegador): siempre se manejan desde `server.ts`.

## Build de producción

```bash
npm run build
npm run serve:ssr:portfolio_project_angular
```

Esto genera el bundle en `dist/portfolio_project_angular` y levanta el servidor Express (SSR + endpoint de contacto) en el puerto definido por `PORT` (por defecto `4000`).

## Despliegue en Netlify

El sitio se publica en Netlify como estático (`netlify.toml` define `publish = dist/portfolio_project_angular/browser` y `functions = netlify/functions`). El formulario de contacto llama directamente a `/.netlify/functions/contact` (la URL nativa de la función) — se probó un redirect `/api/contact -> función` vía `netlify.toml`, pero la detección de SSR de Angular en Netlify lo ignora para rutas de la app, así que el cliente evita ese problema llamando a la función directamente.

Para que el formulario funcione en producción:

1. En el dashboard de Netlify → **Site configuration → Environment variables**, agrega:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
2. Vuelve a desplegar (o espera al próximo push) para que la función tome las variables.

**Nunca** se debe exponer la API key de Resend (ni ninguna credencial) en código del cliente (componentes, HTML, JS del navegador): siempre se manejan desde el servidor/función.

## Antes de desplegar (checklist general)

- [ ] Configura `RESEND_API_KEY` y `CONTACT_TO_EMAIL` en el entorno de producción (Netlify env vars, o `.env`/variables del host si usas Express).
- [ ] Verifica un dominio propio en Resend para poder enviar desde tu dominio (por ahora se usa `onboarding@resend.dev`, limitado a pruebas).
- [ ] Agrega tu CV en `src/assets/cv-julian-posada.pdf` (el botón "Descargar CV" del home ya apunta ahí).
- [ ] Actualiza las URLs de `src/robots.txt` y `src/sitemap.xml` con tu dominio real.

## Scripts disponibles

- `npm start` — servidor de desarrollo (`ng serve`), sin backend de contacto
- `npm run serve:api` — build + servidor Express (SSR + `/api/contact`) en `http://localhost:4000`
- `npm run build` — build de producción con SSR/prerender
- `npm run watch` — build en modo watch
- `npm test` — pruebas unitarias con Karma/Jasmine
- `npm run serve:ssr:portfolio_project_angular` — levanta el servidor Express con el build ya existente (sin rebuildear)

## Contacto

- LinkedIn: [julian-felipe-posada-martinez](https://www.linkedin.com/in/julian-felipe-posada-martinez-4764011a0/)
- GitHub: [JPosada24](https://github.com/JPosada24)
