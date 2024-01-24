import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'start',
    loadComponent: () => import('./start/start.page').then( m => m.StartPage)
  },
];
