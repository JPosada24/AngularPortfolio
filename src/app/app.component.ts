import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SeoService } from './shared/services/seo.service';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, ButtonModule, NavbarComponent, FooterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'portfolio_project_angular';

	constructor() {
		inject(SeoService).init();
	}
}
