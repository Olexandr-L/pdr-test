import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TestsState } from '@app/core/storages/tests/tests.state';
import { Store } from '@ngxs/store';
import { summarizeTest, TEST_MODE_LABELS } from '@app/core/utils/test.utils';

export interface TestResultItem {
	index: number;
	id: number;
	mode: string;
	correctAnswers: number;
	errors: number;
	skipped: number;
	/** null для режимів, де немає «склав/не склав». */
	passed: boolean | null;
}

@Component({
	selector: 'app-result-list',
	imports: [RouterLink, DatePipe],
	templateUrl: './result-list.component.html',
	styleUrl: './result-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultListComponent {

	private readonly store = inject(Store);

	public readonly tests = this.store.selectSignal(TestsState.getAllTests);

	public readonly results: Signal<TestResultItem[]> = computed(() => {
		const tests = this.tests();

		// Копія, щоб не розвертати масив у сторі.
		return [...tests].reverse().map((test, index) => {
			const summary = summarizeTest(test);

			return {
				// Найстаріший тест — №1, найновіший — №length.
				index: tests.length - index,
				id: test.id,
				mode: TEST_MODE_LABELS[summary.mode],
				correctAnswers: summary.correct,
				errors: summary.mistakes,
				skipped: summary.skipped,
				passed: summary.passed,
			};
		});
	});
}
