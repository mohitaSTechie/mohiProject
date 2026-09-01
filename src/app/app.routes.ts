import { Routes } from '@angular/router';
import { Home } from './home/home';
import { News } from './news/news';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'news', component: News },
  { path: 'profile', component: Profile },
];
