import { Routes } from '@angular/router';
import { HomeComponent } from './domains/shared/pages/home/home.component';
import { HeadphonesComponent } from './domains/products/pages/headphones/headphones.component';
import { SpeakersComponent } from './domains/products/pages/speakers/speakers.component';
import { EarphonesComponent } from './domains/products/pages/earphones/earphones.component';
import { HeadphoneDetailComponent } from './domains/products/pages/headphone-detail/headphone-detail.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'headphones',
    component: HeadphonesComponent,
  },
  {
    path: 'headphones/:headphone',
    component: HeadphoneDetailComponent,
  },
  {
    path: 'speakers',
    component: SpeakersComponent,
  },
  {
    path: 'earphones',
    component: EarphonesComponent,
  },
];
