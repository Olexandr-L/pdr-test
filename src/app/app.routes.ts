import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { ResultComponent } from './pages/result/result.component';
import { ResultListComponent } from './pages/result-list/result-list.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryComponent } from './pages/category/category.component';

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
        path: 'category-list',
        component: CategoryListComponent,
    },
    {
        path: 'category',
        redirectTo: ''
    },
    {
        path: 'category/:id',
        component: CategoryComponent,
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
