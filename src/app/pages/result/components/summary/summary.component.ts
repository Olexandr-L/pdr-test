import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TestData } from '@app/core/interfaces/questions.interfaces';
import { categories } from '@app/core/maps/categories.map';
import { formatPercent, summarizeTest, TEST_MODE_LABELS } from '@app/core/utils/test.utils';

@Component({
    selector: 'app-summary',
    imports: [],
    templateUrl: './summary.component.html',
    styleUrl: './summary.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
    public readonly test = input.required<TestData>();

    public readonly summary = computed(() => summarizeTest(this.test()));

    public readonly scoreText = computed(() => formatPercent(this.summary().score));

    public readonly modeLabel = computed(() => TEST_MODE_LABELS[this.summary().mode]);

    public readonly categoryName = computed(() => {
        const categoryId = this.test().categoryId;
        return categories.find((category) => category.id === categoryId)?.name ?? null;
    });
}
