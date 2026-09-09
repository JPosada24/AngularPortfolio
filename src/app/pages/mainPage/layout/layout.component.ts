import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { ServicesComponent } from '../components/servicesSection/services.component';
import { ProjectsComponent } from '../components/projectsSection/projects.component';

@Component({
  selector: 'main-page-layout',
  standalone: true,
  imports: [HeaderComponent, ServicesComponent, ProjectsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class MainPageLayoutComponent {

}
