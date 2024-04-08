import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { Services } from '../../../../interfaces/services.interface';

@Component({
  selector: 'about-page-skills-section',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {

	public servicesCard: Services[] = [
		{
			title: 'Html',
			icon: 'assets/html.svg',
		},
		{
			title: 'Css',
			icon: 'assets/css3.svg',
		},
		{
			title: 'Typescript',
			icon: 'assets/ts.svg',
		},
		{
			title: 'Python',
			icon: 'assets/python.svg',
		},
		{
			title: 'Django',
			icon: 'assets/django.svg',
		},
		{
			title: 'Figma',
			icon: 'assets/figma.svg',
		},
		{
			title: 'Rocketbot',
			icon: 'assets/rocketbot.png',
		},
		{
			title: 'Angular',
			icon: 'assets/angular.svg',
		},
	];

}
