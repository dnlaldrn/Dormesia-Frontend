import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import {AboutPage} from './pages/about-page/about-page'
import { LoginPage } from './pages/login-page/login-page';
import { SignUpPage } from './pages/sign-up-page/sign-up-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'login', component: LoginPage },
  { path: 'sign-up', component: SignUpPage },
];
