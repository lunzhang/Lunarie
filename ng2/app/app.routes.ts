import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SwordComponent } from './swords/sword.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/keyboard',
    pathMatch: 'full'
  },
  { path: 'swords', component: SwordComponent },
  { path: 'keyboard', component: KeyboardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
