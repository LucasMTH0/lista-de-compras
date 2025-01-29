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
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/auth/register/register.component').then(m => m.RegisterComponent)
      }
    ]
  },
  {
    path: 'products',
    children: [
      {
        path: 'new',
        loadComponent: () => import('./pages/product/create-product/create-product.component').then(m => m.CreateProductComponent)
      },
      {
        path: 'detail/:id',
        loadComponent: () => import('./pages/product/detail-product/detail-product.component').then(m => m.DetailProductComponent)
      },
      {
        path: 'edit/:id',
        loadComponent: () => import('./pages/product/update-product/update-product.component').then(m => m.UpdateProductComponent)
      }

    ]
  }
];
