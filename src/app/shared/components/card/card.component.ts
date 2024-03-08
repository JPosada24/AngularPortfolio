import { Component } from '@angular/core';
import { Services } from '../../../interfaces/services.interface';
import { CardModule } from 'primeng/card';

@Component({
	selector: 'shared-card',
	standalone: true,
	imports: [CardModule],
	templateUrl: './card.component.html',
	styleUrl: './card.component.css',
})
export class CardComponent {
	public servicesCard: Services[] = [
		{
			title: 'Desarrollo Web',
			subtitle: 'Desarrollo web a medida para tus necesidades',
			description:
				'Construyo sitios web y aplicaciones escalables y seguras',
			icon: 'assets/web-development.svg',
		},
		{
			title: 'Diseño Ui/UX',
			subtitle: 'Ayudo a crear interfaces intuitivas y atractivas.',
			description:
				'Diseño experiencias de usuario fluidas y fáciles de usar para sitios web y aplicaciones.',
			icon: 'assets/web-design.svg',
		},
		{
			title: 'Desarrollo RPA',
			subtitle: 'Automatizo tareas repetitivas para optimizar tu negocio.',
			description:
				'Implemento soluciones RPA para aumentar la eficiencia y productividad.',
			icon: 'assets/rpa.svg',
		},
	];
}
