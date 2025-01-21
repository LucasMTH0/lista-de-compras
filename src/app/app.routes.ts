import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'login',
  //     },
  //     {
  //       path: '/login',
  //       component: LoginComponent,
  //     }
  //   ]
  // }
];
