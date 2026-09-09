import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { catchError, finalize, of } from 'rxjs';

interface ContactResponse {
	success: boolean;
}

@Component({
	selector: 'contact-page-contact-form',
	standalone: true,
	imports: [ButtonModule, FormsModule, ToastModule, ReactiveFormsModule],
	providers: [MessageService],
	templateUrl: './contact-form.component.html',
	styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
	public fb = inject(FormBuilder);
	public http = inject(HttpClient);
	public messageService = inject(MessageService);

	public sending = false;

	public emailForm: FormGroup = this.fb.group({
		name: ['', [Validators.required, Validators.minLength(3)]],
		email: ['', [Validators.required, Validators.email]],
		message: ['', [Validators.required, Validators.minLength(20)]],
	});

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

	private notifySuccess(): void {
		this.messageService.add({
			severity: 'success',
			summary: 'Email enviado',
			detail: 'Gracias por comunicarte conmigo!',
		});
	}

	private notifyError(): void {
		this.messageService.add({
			severity: 'error',
			summary: 'Algo salió mal',
			detail: 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.',
		});
	}

	onSubmit(): void {
		if (this.emailForm.invalid || this.sending) {
			this.emailForm.markAllAsTouched();
			return;
		}

		this.sending = true;

		this.http
			.post<ContactResponse>('/api/contact', this.emailForm.value)
			.pipe(
				catchError(() => {
					this.notifyError();
					return of(null);
				}),
				finalize(() => (this.sending = false))
			)
			.subscribe((response) => {
				if (response?.success) {
					this.notifySuccess();
					this.emailForm.reset();
				}
			});
	}
}
