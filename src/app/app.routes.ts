import { ParamMap, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { ResultListComponent } from './pages/result-list/result-list.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { categories } from './core/maps/categories.map';
import { Breadcrumb, BreadcrumbsFn } from './shared/components/breadcrumbs/breadcrumbs.component';

const CATEGORY_LIST: Breadcrumb = { label: 'Тести по темах', link: '/category-list' };
const RESULT_LIST: Breadcrumb = { label: 'Мої результати', link: '/result' };

const categoryName = (params: ParamMap) =>
    categories.find((category) => category.id === Number(params.get('id')))?.name ?? 'Тема';

const resultDate = (params: ParamMap) =>
    new Intl.DateTimeFormat('uk-UA', { dateStyle: 'short', timeStyle: 'short' }).format(
        Number(params.get('id')),
    );

const breadcrumbs = (fn: BreadcrumbsFn) => ({ breadcrumbs: fn });

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'test',
        loadComponent: () => import('./pages/test/test.component').then((m) => m.TestComponent),
        data: { mode: 'exam', ...breadcrumbs(() => [{ label: 'Іспит' }]) },
    },
    {
        path: 'test/:id',
        loadComponent: () => import('./pages/test/test.component').then((m) => m.TestComponent),
        data: {
            mode: 'categoryExam',
            ...breadcrumbs((params) => [CATEGORY_LIST, { label: `Іспит: ${categoryName(params)}` }]),
        },
    },
    {
        path: 'category-list',
        component: CategoryListComponent,
        data: breadcrumbs(() => [{ label: CATEGORY_LIST.label }]),
    },
    {
        path: 'category',
        redirectTo: ''
    },
    {
        path: 'category/:id',
        loadComponent: () => import('./pages/test/test.component').then((m) => m.TestComponent),
        data: {
            mode: 'learning',
            ...breadcrumbs((params) => [CATEGORY_LIST, { label: categoryName(params) }]),
        },
    },
    {
        path: 'mistakes',
        loadComponent: () => import('./pages/test/test.component').then((m) => m.TestComponent),
        data: { mode: 'mistakes', ...breadcrumbs(() => [{ label: 'Робота над помилками' }]) },
    },
    {
        path: 'result',
        component: ResultListComponent,
        data: breadcrumbs(() => [{ label: RESULT_LIST.label }]),
    },
    {
        path: 'result/:id',
        component: ResultComponent,
        data: breadcrumbs((params) => [RESULT_LIST, { label: `Результат від ${resultDate(params)}` }]),
    },
];
