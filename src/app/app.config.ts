import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
    withNgxsStoragePlugin,
} from '@ngxs/storage-plugin';

import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { provideHttpClient } from '@angular/common/http';
import { QuestionsState } from './core/storages/questions/questions.state';
import { TestsState } from './core/storages/tests/tests.state';
import { ProgressState } from './core/storages/progress/progress.state';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideStore(
            [QuestionsState, TestsState, ProgressState],
            withNgxsStoragePlugin({ keys: [TestsState, ProgressState], namespace: 'krok2' }),
        ),
        provideHttpClient(),
        {
            provide: LOCALE_ID,
            useValue: 'uk-UA',
        },
    ],
};
