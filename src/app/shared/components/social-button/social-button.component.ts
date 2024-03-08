import { Component, Input } from '@angular/core';
import { SocialNetwork } from '../../../interfaces/social-net.interface';

@Component({
  selector: 'shared-social-button',
  standalone: true,
  imports: [],
  templateUrl: './social-button.component.html',
  styleUrl: './social-button.component.css'
})
export class SocialButtonComponent {

	@Input()
	public bgColor: string = '';
	
	@Input()
	public brightness: string = '';

	public socialNetworks: SocialNetwork[] = [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/julian-felipe-posada-martinez-4764011a0/',
			logo: 'assets/linkedin.svg'
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/julianfposada/',
			logo: 'assets/instagram.svg'
		},
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/julianfelipe.posadamartinez?locale=es_LA',
			logo: 'assets/facebook.svg'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/JPosada24',
			logo: 'assets/github.svg'
		},
	]

}
