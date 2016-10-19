import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { swordRoutes } from './swords/sword.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/swords',
    pathMatch: 'full'
  },
  ...swordRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
