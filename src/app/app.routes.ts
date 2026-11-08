import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { ResultListComponent } from './pages/result-list/result-list.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'test',
        loadComponent: () => import('./pages/test/test.component').then((m) => m.TestComponent),
        data: { mode: 'exam' },
    },
    {
        path: 'test/:id',
        loadComponent: () => import('./pages/test/test.component').then((m) => m.TestComponent),
        data: { mode: 'categoryExam' },
    },
    {
        path: 'category-list',
        component: CategoryListComponent,
    },
    {
        path: 'category',
        redirectTo: ''
    },
    {
        path: 'category/:id',
        loadComponent: () => import('./pages/test/test.component').then((m) => m.TestComponent),
        data: { mode: 'learning' },
    },
    {
        path: 'mistakes',
        loadComponent: () => import('./pages/test/test.component').then((m) => m.TestComponent),
        data: { mode: 'mistakes' },
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
