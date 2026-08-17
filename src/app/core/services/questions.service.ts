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

    public loadQuestions(): Observable<QuestionWithCategory[]> {
        const categoriesPaths = structuredClone(categories).map((cat) => cat.path);

        return forkJoin(
            categoriesPaths.map((path) =>
                this.http.get<QuestionCategory>(path).pipe(
                    catchError(err => of(null)),
                )
            )
        ).pipe(
            map((categories) => categories.filter(category => category !== null)),
            map((categories) => {
                const questions: QuestionWithCategory[] = [];

                categories.forEach((category) => {
                    if (category) {
                        category.questions.forEach((question) => {
                            questions.push({
                                ...question,
                                category: category.id,
                            });
                        });
                    }
                });


                return questions;
            }),
        );
    }
}
