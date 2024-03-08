import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { ServicesComponent } from '../components/servicesSection/services.component';

@Component({
  selector: 'main-page-layout',
  standalone: true,
  imports: [HeaderComponent, ServicesComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class MainPageLayoutComponent {

}
