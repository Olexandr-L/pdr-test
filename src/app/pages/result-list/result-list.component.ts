import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TestsState } from '@app/core/storages/tests/tests.state';
import { Store } from '@ngxs/store';
import { MatTableModule } from '@angular/material/table';

export interface TestTableRow {
	index: number;
	id: number;
	correctAnswers: number;
	errors: number;
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
		const tests = this.tests().reverse();

		return tests.map((test, index) => {
			const correctAnswers = test.answers.filter(
				answer => answer.isCorrect
			).length;

			const errors = test.answers.filter(
				answer => !answer.isCorrect
			).length;

			return {
				index,
				id: test.id,
				correctAnswers,
				errors,
				result: errors <= 2 ? 'Складено' : 'Не складено',
			};
		});
	});

	public readonly displayedColumns: string[] = ['position', 'date', 'correctAnswers', 'errors', 'result'];


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
			columnDef: 'result',
			header: 'Результат',
			cell: (element: TestTableRow) => `${element.result}`,
		},
	];
}
