import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/auth/login/login.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {CreateProductComponent} from './pages/product/create-product/create-product.component';
import {DetailProductComponent} from './pages/product/detail-product/detail-product.component';
import {UpdateProductComponent} from './pages/product/update-product/update-product.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ]
  },
  {
    path: 'products',
    children: [
      {
        path: 'new',
        component: CreateProductComponent
      },
      {
        path: 'detail/:id',
        component: DetailProductComponent
      },
      {
        path: 'edit/:id',
        component: UpdateProductComponent
      }

    ]
  }
];
