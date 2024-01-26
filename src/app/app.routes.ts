import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    loadComponent: () => import('./start/start.page').then((m) => m.StartPage),
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
    path: 'ranking',
    loadComponent: () =>
      import('./ranking/ranking.page').then((m) => m.RankingPage),
  },
  {
    path: 'introduction',
    loadComponent: () =>
      import('./introduction/introduction.page').then(
        (m) => m.IntroductionPage,
      ),
  },
  {
    path: 'task3',
    loadComponent: () => import('./task3/task3.page').then((m) => m.Task3Page),
  },
  {
    path: 'task4',
    loadComponent: () => import('./task4/task4.page').then((m) => m.Task4Page),
  },
  {
    path: 'finish',
    loadComponent: () => import('./finish/finish.page').then( m => m.FinishPage)
  },
];
