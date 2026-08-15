import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
    withNgxsStoragePlugin,
} from '@ngxs/storage-plugin';

import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { provideHttpClient } from '@angular/common/http';
import { QuestionsState } from './core/storages/questions/questions.state';
import { TestsState } from './core/storages/tests/tests.state';

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideStore(
            [QuestionsState, TestsState],
            withNgxsStoragePlugin({ keys: [TestsState] }),
        ), provideHttpClient()
    ],
};
