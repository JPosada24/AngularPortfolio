import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'home',
		loadComponent: () =>
			import('./pages/mainPage/layout/layout.component').then(
				(m) => m.MainPageLayoutComponent
			),
		title: 'Julian Posada | Desarrollador Web & RPA',
		data: {
			description:
				'Portafolio de Julian Posada, desarrollador web y de automatización RPA. Conoce mis servicios y proyectos recientes en Angular, TypeScript, Python y Django.',
		},
		pathMatch: 'full',
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./pages/aboutPage/layout/layout.component').then(
				(m) => m.AboutPageLayoutComponent
			),
		title: 'Sobre mí | Julian Posada',
		data: {
			description:
				'Conoce la experiencia, habilidades técnicas y trayectoria profesional de Julian Posada, desarrollador web especializado en Angular, Python y automatización RPA.',
		},
	},
	{
		path: 'portfolio',
		loadComponent: () =>
			import('./pages/portfolioPage/layout/layout.component').then(
				(m) => m.PortfolioPageLayoutComponent
			),
		title: 'Portafolio | Julian Posada',
		data: {
			description:
				'Explora el portafolio de proyectos de Julian Posada: aplicaciones en Angular, TypeScript, Python, Django y automatizaciones RPA, con enlaces a código y demos.',
		},
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./pages/contactPage/layout/layout.component').then(
				(m) => m.ContactPageLayoutComponent
			),
		title: 'Contacto | Julian Posada',
		data: {
			description:
				'Contacta a Julian Posada para hablar sobre tu próximo proyecto de desarrollo web o automatización RPA a través del formulario de contacto.',
		},
	},
	{
		path: '**',
		redirectTo: 'home',
	},
];
