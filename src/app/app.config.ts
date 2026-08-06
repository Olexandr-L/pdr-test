import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { provideHttpClient } from '@angular/common/http';
import { QuestionsState } from './core/storages/questions/questions.state';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), provideStore([QuestionsState]), provideHttpClient()],
};
