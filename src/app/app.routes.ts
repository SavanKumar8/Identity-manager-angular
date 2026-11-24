import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/IdentityPage',
    pathMatch: 'full',
  },
  {
    path: 'identities',
    loadComponent: () => import('./features/identities-page').then((route) => route.IdentityPage),
  },
  {
    path: 'requestAccess',
    loadComponent: () => import('./features/request-access').then((route) => route.RequestAccess),
  },
  {
    path: '**',
    redirectTo: 'identities',
  },
];
