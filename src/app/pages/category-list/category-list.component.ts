import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { categories } from '@app/core/maps/categories.map';

@Component({
    selector: 'app-category-list',
    imports: [MatButtonModule, RouterLink],
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
    public readonly categories = structuredClone(categories);
}
