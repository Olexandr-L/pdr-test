import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { QuestionCategory, QuestionWithCategory } from '../interfaces/questions.interfaces';
import { categories } from '../maps/categories.map';

@Injectable({
    providedIn: 'root',
})
export class QuestionsService {
    private readonly http = inject(HttpClient);

    /** Loads all topics; a topic that fails to load is skipped. */
    public loadQuestions(): Observable<QuestionWithCategory[]> {
        return forkJoin(
            categories.map(({ path }) =>
                this.http.get<QuestionCategory>(path).pipe(catchError(() => of(null)))
            )
        ).pipe(
            map((loaded) =>
                loaded.flatMap((category) =>
                    category
                        ? category.questions.map((question) => ({ ...question, category: category.id }))
                        : []
                )
            ),
        );
    }
}
