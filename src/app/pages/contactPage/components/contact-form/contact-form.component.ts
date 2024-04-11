import { Component, inject } from '@angular/core';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Resend } from 'resend';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const resend = new Resend('re_dt394MhT_MeWSVjScfayXHAvzABXDMmmk');

@Component({
	selector: 'contact-page-contact-form',
	standalone: true,
	imports: [
		SelectButtonModule,
		FloatLabelModule,
		ButtonModule,
		FormsModule,
		ToastModule,
		ReactiveFormsModule
	],
	providers: [MessageService],
	templateUrl: './contact-form.component.html',
	styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
	public fb = inject(FormBuilder);
	public router = inject(Router);
	public messageService = inject(MessageService);

	public emailForm: FormGroup = this.fb.group({
		name: ['', [Validators.required, Validators.minLength(3)]],
		email: ['', [Validators.required, Validators.email]],
		message: ['', [Validators.required, Validators.minLength(20)]],
	});

	public value: string | undefined;

	isValidField(field: string): boolean | null {
		return (
			this.emailForm.controls[field].errors &&
			this.emailForm.controls[field].touched
		);
	}

	getFieldError(field: string): string | null {
		if (!this.emailForm.controls[field]) return null;

		const errors = this.emailForm.controls[field].errors || {};

		for (const key of Object.keys(errors)) {
			switch (key) {
				case 'required':
					return 'Este campo es requerido';

				case 'minlength':
					return `Mínimo ${errors['minlength'].requiredLength} carácteres.`;

				case 'email':
					return 'El correo no es válido';
			}
		}

		return null;
	}

	show() {
		this.messageService.add({
			severity: 'success',
			summary: 'Email enviado',
			detail: 'Gracias por comunicarte conmigo!',
		});
	}

	onSubmit(): void {
		if (this.emailForm.invalid) {
			this.emailForm.markAllAsTouched();
			return;
		}

		const { name, email, message } = this.emailForm.value;

		console.log(name);
		console.log(email);
		console.log(message);
		
		this.show();

		resend.emails.send({
			from: email,
			to: 'julian_2120@hotmail.com',
			subject: `${name} interesado en hablar sobre proyectos`,
			html: `<p>${message}</p>`,
		});


		this.emailForm.reset();
	}
}
