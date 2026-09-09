import { Component } from '@angular/core';
import { Project } from '../../../../interfaces/project.interface';
import { PROJECTS } from '../../../../shared/data/projects.data';

@Component({
	selector: 'main-page-projects',
	standalone: true,
	imports: [],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css',
})
export class ProjectsComponent {
	public projects: Project[] = PROJECTS;
}
