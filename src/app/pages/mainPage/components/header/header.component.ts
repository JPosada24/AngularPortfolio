import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SocialButtonComponent } from '../../../../shared/components/social-button/social-button.component';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [ButtonComponent, SocialButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
