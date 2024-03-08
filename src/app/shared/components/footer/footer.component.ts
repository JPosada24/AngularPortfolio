import { Component } from '@angular/core';
import { SocialButtonComponent } from '../social-button/social-button.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'shared-footer',
  standalone: true,
  imports: [SocialButtonComponent, DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

	public current_date: Date = new Date();

}
