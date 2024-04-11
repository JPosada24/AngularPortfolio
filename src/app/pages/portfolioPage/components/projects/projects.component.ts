import { Component } from '@angular/core';
import { Services } from '../../../../interfaces/services.interface';

@Component({
  selector: 'projects-section-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

	public projects: Services[] = [
		{
			title: 'Heroes Angular',
            description: 'Proyecto de CRUD completo realizado en Angular',
            icon: 'assets/crudheroes.png',
			url: 'https://github.com/JPosada24/HeroesCrudAngular'
		},
		{
			title: 'Aplicación de Países',
            description: 'Proyecto para buscar paises y regiones hecho en Angular',
            icon: 'assets/countryapp.png',
			url: 'https://github.com/JPosada24/countries-app'
		},
		{
			title: 'TODO List',
            description: 'Proyecto de lista de tareas que guarda en el local storage realizada en Angular',
            icon: 'assets/todo-list.png',
			url: 'https://github.com/JPosada24/lista-tareas-angular'
		},
		{
			title: 'Sistema de votaciones',
            description: 'Proyecto final de aplicativo para realizar votaciones realizado en PHP con Laravel',
            icon: 'assets/svsena.png',
			url: 'https://github.com/JPosada24/SVSena'
		},
		{
			title: 'Diseño página de fragancias',
            description: 'Diseño final de una página web informativa de perfumes realizada en Figma',
            icon: 'assets/diseniofragance.png',
			url: 'https://www.figma.com/file/RZz9CXKzUE3mWErZQWanv0/Fragance_WebPage?type=design&node-id=0-1&mode=design&t=gLMzYGtmxjTgCRYR-0'
		},
		
	]

}
