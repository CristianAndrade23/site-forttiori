import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Forttiori IT',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'sobre',
    title: 'Sobre | Forttiori IT',
    loadComponent: () => import('./pages/sobre/sobre').then((m) => m.Sobre),
  },
  {
    path: 'plano-carreira-vagas',
    title: 'Plano de carreira e vagas | Forttiori IT',
    loadComponent: () =>
      import('./pages/plano-carreira-vagas/plano-carreira-vagas').then((m) => m.PlanoCarreiraVagas),
  },
  { path: '**', redirectTo: '' },
];
