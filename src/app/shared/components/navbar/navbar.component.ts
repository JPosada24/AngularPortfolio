import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'shared-navbar',
	standalone: true,
	imports: [MenubarModule, InputTextModule, RouterLink, RouterLinkActive],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
	public items: MenuItem[] | undefined;
	public isMenuOpen = false;

	ngOnInit(): void {
		this.items = [
			{
				label: 'INICIO',
				routerLink: '/home',
				routerLinkActiveOptions: {
					exact: true,
				},
			},
			{
				label: 'SOBRE MI',
				routerLink: '/about',
			},
			{
				label: 'PORTAFOLIO',
				routerLink: '/portfolio',
			},
			{
				label: 'CONTACTO',
				routerLink: '/contact',
			},
		];
	}

	toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}

	closeMenu(): void {
		this.isMenuOpen = false;
	}
}
