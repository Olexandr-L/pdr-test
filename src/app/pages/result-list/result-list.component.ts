import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TestsState } from '@app/core/storages/tests/tests.state';
import { Store } from '@ngxs/store';
import { getTestMode, isExamMode, summarizeTest, TEST_MODE_LABELS } from '@app/core/utils/test.utils';

export interface TestResultItem {
	index: number;
	id: number;
	mode: string;
	correctAnswers: number;
	errors: number;
	skipped: number;
	/** null for modes without a pass/fail outcome. */
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
		// History contains all modes ("Review mistakes" is built from it),
		// but "My results" shows only exams.
		const tests = this.tests().filter((test) => isExamMode(getTestMode(test)));

		// Copy, so the array in the store is not reversed.
		return [...tests].reverse().map((test, index) => {
			const summary = summarizeTest(test);

			return {
				// The oldest test is #1, the newest is #length.
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
