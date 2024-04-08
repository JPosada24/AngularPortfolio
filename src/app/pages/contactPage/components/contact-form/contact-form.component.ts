import { Component } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { OptionsForm } from '../../../../interfaces/optionsForm.interface';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'contact-page-contact-form',
	standalone: true,
	imports: [
		SelectButtonModule,
		FloatLabelModule,
		ButtonModule,
		FormsModule,
		ReactiveFormsModule,
	],
	templateUrl: './contact-form.component.html',
	styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
	public emailForm = new FormGroup({
		name: new FormControl('', Validators.required),
		email: new FormControl(''),
		message: new FormControl(''),
	});

	public value: string | undefined;

	public options: OptionsForm[] = [
		{ name: 'Diseño Web', value: 'design' },
		{ name: 'Desarrollo Web', value: 'development' },
		{ name: 'Desarrollo RPA', value: 'rpa' },
	];

	onSubmit(): void {
		console.log(this.emailForm.value)
		console.log(!this.emailForm)
		this.emailForm.reset();
	}
}
