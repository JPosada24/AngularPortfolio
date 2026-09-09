import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

	@Input()
	public labelInput: string = '';

	/** Internal route to navigate to when no `href` is provided. */
	@Input()
	public to: string = 'contact';

	/** External/asset link. When set, the button renders as an anchor instead of navigating internally. */
	@Input()
	public href?: string;

	/** Whether the link should trigger a file download instead of opening in a new tab. */
	@Input()
	public download = false;

	@Input()
	public outline = false;

}
