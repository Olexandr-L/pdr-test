import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { ResultComponent } from './pages/result/result.component';
import { ResultListComponent } from './pages/result-list/result-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'test',
        component: TestComponent,
    },
    {
        path: 'result',
        component: ResultListComponent,
    },
    {
        path: 'result/:id',
        component: ResultComponent,
    },
];
