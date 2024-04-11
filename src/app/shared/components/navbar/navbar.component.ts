import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
	selector: 'shared-navbar',
	standalone: true,
	imports: [MenubarModule, InputTextModule],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
	public items: MenuItem[] | undefined;

	ngOnInit(): void {
		this.items = [
			{
				label: 'INICIO',
				routerLink: 'home',
				routerLinkActiveOptions: {
					exact: true,
				},
			},
			{
				label: 'SOBRE MI',
				routerLink: 'about',
			},
			{
				label: 'PORTAFOLIO',
				routerLink: 'portfolio',
			},
			{
				label: 'CONTACTO',
				routerLink: 'contact',
			},
		];
	}

}
