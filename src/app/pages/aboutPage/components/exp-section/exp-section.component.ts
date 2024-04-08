import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { ExperienceItem } from '../../../../interfaces/exp.interface';

@Component({
	selector: 'about-page-exp-section',
	standalone: true,
	imports: [TimelineModule, CardModule],
	templateUrl: './exp-section.component.html',
	styleUrl: './exp-section.component.css',
})
export class ExpSectionComponent {
	public events: ExperienceItem[] = [];
	public colorIcon: string = '#00D691';

	constructor() {
		this.events = [
			{
				title: 'HOSPITAL PABLO TOBÓN URIBE',
				subtitle: 'Analista de Desarrollo',
				date: '2022 - Actualidad',
				city: '(Medellín, Antioquia, Colombia)',
				description:
					'Automatización robotica de procesos en diferentes áreas del hospital, impactando en la reducción del tareas repetitivas de los colaboradores y aumentando la productividad de cada proceso dentro del hospital. Desarrollo de aplicaciones web para la ejecución de las automatizaciones.',
			},
			{
				title: 'CENTRO NACIONAL DE INVESTIGACIONES DE CAFÉ - CENICAFÉ',
				subtitle: 'Aprendiz área TIC.',
				date: '2021 - 2022',
				city: '(Manizales, Caldas, Colombia)',
				description: 'Administración de plataforma de publicaciones. Desarrollo de estilos en página web.',
			},
			{},
		];
	}
}
