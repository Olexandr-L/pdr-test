import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TestsState } from '@app/core/storages/tests/tests.state';
import { Store } from '@ngxs/store';
import { MatTableModule } from '@angular/material/table';
import { summarizeTest, TEST_MODE_LABELS } from '@app/core/utils/test.utils';

export interface TestTableRow {
	index: number;
	id: number;
	mode: string;
	correctAnswers: number;
	errors: number;
	skipped: number;
	result: string;
}

@Component({
	selector: 'app-result-list',
	imports: [MatButtonModule, MatTableModule, RouterLink],
	providers: [DatePipe],
	templateUrl: './result-list.component.html',
	styleUrl: './result-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultListComponent {

	private readonly store = inject(Store);
	private datePipe = inject(DatePipe);

	public readonly tests = this.store.selectSignal(TestsState.getAllTests);

	public readonly tableData: Signal<TestTableRow[]> = computed(() => {
		// Копія, щоб не розвертати масив у сторі.
		const tests = [...this.tests()].reverse();

		return tests.map((test, index) => {
			const summary = summarizeTest(test);

			let result = '—';
			if (summary.passed !== null) {
				result = summary.passed ? 'Складено 🌞' : 'Не складено 😿';
			}

			return {
				index: index + 1,
				id: test.id,
				mode: TEST_MODE_LABELS[summary.mode],
				correctAnswers: summary.correct,
				errors: summary.mistakes,
				skipped: summary.skipped,
				result,
			};
		});
	});

	public readonly displayedColumns: string[] = ['position', 'date', 'mode', 'correctAnswers', 'errors', 'skipped', 'result'];


	public readonly columns = [
		{
			columnDef: 'position',
			header: 'No.',
			cell: (element: TestTableRow) => `${element.index}`,
		},
		{
			columnDef: 'date',
			header: 'Дата',
			cell: (element: TestTableRow) => `${this.datePipe.transform(element.id, 'short')}`,
		},
		{
			columnDef: 'mode',
			header: 'Режим',
			cell: (element: TestTableRow) => element.mode,
		},
		{
			columnDef: 'correctAnswers',
			header: 'Правильні відповіді',
			cell: (element: TestTableRow) => `${element.correctAnswers}`,
		},
		{
			columnDef: 'errors',
			header: 'Помилки',
			cell: (element: TestTableRow) => `${element.errors}`,
		},
		{
			columnDef: 'skipped',
			header: 'Пропущено',
			cell: (element: TestTableRow) => `${element.skipped}`,
		},
		{
			columnDef: 'result',
			header: 'Результат',
			cell: (element: TestTableRow) => `${element.result}`,
		},
	];
}
