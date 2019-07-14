import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

const MainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./document/document.module').then(mod => mod.DocumentModule),
  },
  {
    path: '',
    component: MainComponent,
    loadChildren: () => import('./community/community.module').then(mod => mod.CommunityModule),
  }
];

export { MainRoutes };
