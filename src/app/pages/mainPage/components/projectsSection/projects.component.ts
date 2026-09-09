import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../../interfaces/project.interface';
import { PROJECTS } from '../../../../shared/data/projects.data';

@Component({
	selector: 'projects-section-projects',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css',
})
export class ProjectsComponent {
	public projects: Project[] = PROJECTS.filter((project) => project.featured);
}
