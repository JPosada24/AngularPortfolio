import { Component } from '@angular/core';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';

@Component({
	selector: 'contact-page-layout',
	standalone: true,
	imports: [ContactFormComponent],
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.css',
})
export class ContactPageLayoutComponent {
}
