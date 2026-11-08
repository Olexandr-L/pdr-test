import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TestProgress } from '@app/core/interfaces/questions.interfaces';
import { categories } from '@app/core/maps/categories.map';
import { ProgressState } from '@app/core/storages/progress/progress.state';
import { isAnswered } from '@app/core/utils/test.utils';
import { Store } from '@ngxs/store';

@Component({
    selector: 'app-category-list',
    imports: [MatButtonModule, RouterLink],
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
    private readonly store = inject(Store);

    public readonly categories = categories;
    public readonly progress = this.store.selectSignal(ProgressState.getAll);

    public answeredCount(progress: TestProgress): number {
        return progress.answers.filter(isAnswered).length;
    }
}
