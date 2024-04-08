import { Component } from '@angular/core';
import { AboutSectionComponent } from '../components/about-section/about-section.component';
import { SkillsSectionComponent } from '../components/skills-section/skills-section.component';
import { ExpSectionComponent } from '../components/exp-section/exp-section.component';

@Component({
  selector: 'about-page-layout',
  standalone: true,
  imports: [AboutSectionComponent, SkillsSectionComponent, ExpSectionComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class AboutPageLayoutComponent {

}
