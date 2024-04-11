import { Component } from '@angular/core';
import { ProjectsComponent } from '../components/projects/projects.component';

@Component({
  selector: 'portfolio-page-layout',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class PortfolioPageLayoutComponent {

}
