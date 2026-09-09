import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import {
	ActivatedRouteSnapshot,
	NavigationEnd,
	Router,
} from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SeoService {
	private readonly router = inject(Router);
	private readonly meta = inject(Meta);

	init(): void {
		this.router.events
			.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
			.subscribe(() => {
				this.updateForRoute(this.router.routerState.snapshot.root);
			});
	}

	private updateForRoute(root: ActivatedRouteSnapshot): void {
		let route: ActivatedRouteSnapshot | null = root;
		while (route?.firstChild) {
			route = route.firstChild;
		}

		const description = route?.data?.['description'];
		if (!description) {
			return;
		}

		this.meta.updateTag({ name: 'description', content: description });
		this.meta.updateTag({ property: 'og:description', content: description });
		this.meta.updateTag({ name: 'twitter:description', content: description });

		const pageTitle = route?.title;
		if (pageTitle) {
			this.meta.updateTag({ property: 'og:title', content: pageTitle });
			this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
		}
	}
}
