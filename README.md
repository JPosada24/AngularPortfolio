# Julian Posada — Portafolio

Portafolio web personal construido con **Angular 17** (standalone components + SSR/hidratación), **PrimeNG** y **PrimeFlex**. Presenta mi perfil profesional, experiencia, habilidades y proyectos, con un formulario de contacto funcional respaldado por [Resend](https://resend.com).

🔗 **Demo en vivo:** _agrega aquí la URL una vez despliegues el sitio_

## Tech stack

- **Framework:** Angular 17 (standalone components, Angular Universal / SSR)
- **UI:** PrimeNG, PrimeFlex, PrimeIcons
- **Formularios:** Reactive Forms con validación
- **Backend ligero:** Express (`server.ts`) para renderizado SSR y el endpoint `POST /api/contact`
- **Email:** Resend (envío de correos desde el servidor, nunca desde el cliente)

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

> El endpoint `/api/contact` solo existe cuando corre el servidor Express (SSR). En `ng serve` el formulario no podrá enviar correos: usa `npm run build && npm run serve:ssr:portfolio_project_angular` para probarlo end-to-end.

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

## Antes de desplegar

- [ ] Configura `RESEND_API_KEY` y `CONTACT_TO_EMAIL` en el entorno de producción.
- [ ] Verifica un dominio propio en Resend para poder enviar desde tu dominio (por ahora se usa `onboarding@resend.dev`, limitado a pruebas).
- [ ] Agrega tu CV en `src/assets/cv-julian-posada.pdf` (el botón "Descargar CV" del home ya apunta ahí).
- [ ] Actualiza las URLs de `src/robots.txt` y `src/sitemap.xml` con tu dominio real.
- [ ] Reemplaza este README con la URL del demo en vivo una vez publicado.

## Scripts disponibles

- `npm start` — servidor de desarrollo (`ng serve`)
- `npm run build` — build de producción con SSR/prerender
- `npm run watch` — build en modo watch
- `npm test` — pruebas unitarias con Karma/Jasmine
- `npm run serve:ssr:portfolio_project_angular` — levanta el servidor Express con el build de producción

## Contacto

- LinkedIn: [julian-felipe-posada-martinez](https://www.linkedin.com/in/julian-felipe-posada-martinez-4764011a0/)
- GitHub: [JPosada24](https://github.com/JPosada24)
