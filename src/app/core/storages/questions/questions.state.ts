import { Injectable } from '@angular/core';
import { QuestionWithCategory } from '@app/core/interfaces/questions.interfaces';
import { State } from '@ngxs/store';

@State<QuestionWithCategory[]>({
    name: 'questions',
    defaults: []
})
@Injectable()
export class QuestionsState { }