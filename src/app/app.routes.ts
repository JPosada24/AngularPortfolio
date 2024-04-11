import { Routes } from '@angular/router';
import { MainPageLayoutComponent } from './pages/mainPage/layout/layout.component';
import { AboutPageLayoutComponent } from './pages/aboutPage/layout/layout.component';
import { PortfolioPageLayoutComponent } from './pages/portfolioPage/layout/layout.component';
import { ContactPageLayoutComponent } from './pages/contactPage/layout/layout.component';

export const routes: Routes = [
	{
		path: 'home',
		component: MainPageLayoutComponent,
		pathMatch: 'full',
	},
	{
		path: 'about',
		component: AboutPageLayoutComponent,
	},
	{
		path: 'portfolio',
		component: PortfolioPageLayoutComponent,
	},
	{
		path: 'contact',
		component: ContactPageLayoutComponent,
	},
	{
		path: '**',
		redirectTo: 'home',
	},
];
