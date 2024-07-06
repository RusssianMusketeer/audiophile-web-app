import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { HomeComponent } from './domains/shared/pages/home/home.component';

export const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
