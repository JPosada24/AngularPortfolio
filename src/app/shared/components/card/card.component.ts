import { Component, Input } from '@angular/core';
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

	@Input()
	public servicesCard: Services[] = [];
}
