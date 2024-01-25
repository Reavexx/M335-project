import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'start',
    loadComponent: () => import('./start/start.page').then((m) => m.StartPage),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'task1',
    loadComponent: () => import('./task1/task1.page').then((m) => m.Task1Page),
  },
  {
    path: 'task2',
    loadComponent: () => import('./task2/task2.page').then((m) => m.Task2Page),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'ranking',
    loadComponent: () =>
      import('./ranking/ranking.page').then((m) => m.RankingPage),
  },
  {
    path: 'introduction',
    loadComponent: () => import('./introduction/introduction.page').then( m => m.IntroductionPage)
  },
];
