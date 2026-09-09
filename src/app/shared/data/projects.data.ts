import { Project } from '../../interfaces/project.interface';

export const PROJECTS: Project[] = [
	{
		title: 'Heroes Angular',
		description:
			'Aplicación CRUD completa para la gestión de héroes, con enrutamiento, formularios reactivos y consumo de API simulada.',
		image: 'assets/crudheroes.png',
		repoUrl: 'https://github.com/JPosada24/HeroesCrudAngular',
		tags: ['Angular', 'TypeScript', 'CRUD'],
		featured: true,
	},
	{
		title: 'Aplicación de Países',
		description:
			'Buscador de países y regiones con filtros dinámicos, consumo de API REST y diseño responsive.',
		image: 'assets/countryapp.png',
		repoUrl: 'https://github.com/JPosada24/countries-app',
		tags: ['Angular', 'TypeScript', 'REST API'],
		featured: true,
	},
	{
		title: 'TODO List',
		description:
			'Lista de tareas con persistencia en local storage, edición en línea y gestión de estado en Angular.',
		image: 'assets/todo-list.png',
		repoUrl: 'https://github.com/JPosada24/lista-tareas-angular',
		tags: ['Angular', 'TypeScript', 'Local Storage'],
		featured: true,
	},
	{
		title: 'Sistema de Votaciones',
		description:
			'Proyecto final de formación: aplicativo web para gestionar procesos de votación, con roles de usuario y panel administrativo.',
		image: 'assets/svsena.png',
		repoUrl: 'https://github.com/JPosada24/SVSena',
		tags: ['PHP', 'Laravel', 'MySQL'],
	},
	{
		title: 'Diseño Página de Fragancias',
		description:
			'Diseño UI/UX de una página web informativa de perfumes, con foco en jerarquía visual y experiencia de usuario.',
		image: 'assets/diseniofragance.png',
		repoUrl:
			'https://www.figma.com/file/RZz9CXKzUE3mWErZQWanv0/Fragance_WebPage?type=design&node-id=0-1&mode=design&t=gLMzYGtmxjTgCRYR-0',
		tags: ['Figma', 'UI/UX Design'],
	},
];
