import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        loadComponent: () => import('./components/home/home')
            .then(m => m.HomeComponent)
    },
    {
        path: 'Noticia1',
        loadComponent: () => import('./components/notas/noticia1/noticia1')
            .then(m => m.AutosChinosComponent)
    },
    {
        path: 'Noticia2',
        loadComponent: () => import('./components/notas/noticia2/noticia2')
            .then(m => m.Noticia2Component)
    },
    {
        path: 'Noticia3',
        loadComponent: () => import('./components/notas/noticia3/noticia3')
            .then(m => m.Noticia3Component)
    },
    {
        path: 'contactanos',
        loadComponent: () => import('./components/contact/contact')
            .then(m => m.ContactComponent)
    },
    {
        path: '**',
        redirectTo: 'inicio'
    }
];