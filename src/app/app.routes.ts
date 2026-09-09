import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'home',
		loadComponent: () =>
			import('./pages/mainPage/layout/layout.component').then(
				(m) => m.MainPageLayoutComponent
			),
		title: 'Julian Posada | Desarrollador Web & RPA',
		pathMatch: 'full',
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./pages/aboutPage/layout/layout.component').then(
				(m) => m.AboutPageLayoutComponent
			),
		title: 'Sobre mí | Julian Posada',
	},
	{
		path: 'portfolio',
		loadComponent: () =>
			import('./pages/portfolioPage/layout/layout.component').then(
				(m) => m.PortfolioPageLayoutComponent
			),
		title: 'Portafolio | Julian Posada',
	},
	{
		path: 'contact',
		loadComponent: () =>
			import('./pages/contactPage/layout/layout.component').then(
				(m) => m.ContactPageLayoutComponent
			),
		title: 'Contacto | Julian Posada',
	},
	{
		path: '**',
		redirectTo: 'home',
	},
];
