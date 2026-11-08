import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRouteSnapshot, NavigationEnd, ParamMap, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

export interface Breadcrumb {
	label: string;
	/** Без посилання — поточна сторінка. */
	link?: string | unknown[];
}

/**
 * Ланцюжок крихт для маршруту (без «Головної» — вона додається автоматично).
 * Останній елемент — поточна сторінка. Задається в `data.breadcrumbs` маршруту.
 */
export type BreadcrumbsFn = (params: ParamMap) => Breadcrumb[];

const HOME: Breadcrumb = { label: 'Головна', link: '/' };

@Component({
	selector: 'app-breadcrumbs',
	imports: [MatButtonModule, RouterLink],
	templateUrl: './breadcrumbs.component.html',
	styleUrl: './breadcrumbs.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
	private readonly router = inject(Router);

	private readonly route = toSignal(
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map(() => this.deepestChild(this.router.routerState.snapshot.root)),
		),
		{ initialValue: this.deepestChild(this.router.routerState.snapshot.root) },
	);

	public readonly crumbs = computed<Breadcrumb[]>(() => {
		const route = this.route();
		const fn: BreadcrumbsFn | undefined = route.data['breadcrumbs'];
		const trail = fn?.(route.paramMap) ?? [];

		return trail.length ? [HOME, ...trail] : [];
	});

	/** Куди веде «Назад» на вузьких екранах — на сторінку рівнем вище. */
	public readonly parent = computed(() => {
		const crumbs = this.crumbs();
		return crumbs.length > 1 ? crumbs[crumbs.length - 2] : null;
	});

	private deepestChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
		while (route.firstChild) {
			route = route.firstChild;
		}
		return route;
	}
}
