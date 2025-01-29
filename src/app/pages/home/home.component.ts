import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from '@angular/router';
import {ProductsService} from '../../services/products/products.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {LocalStorageService} from '../../services/localStorage/local-storage.service';
import {Product} from '../../interface/Product'
import {ProductCardComponent} from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe,
    ProductCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  protected products$: Observable<Product[]> | undefined;
  constructor(
    private router: Router,
    protected productsService: ProductsService,
    private localStorageService: LocalStorageService,
  ) {
    if(this.localStorageService.checkUserIsLoggedIn()){
      const id: string = this.localStorageService.getUserIdStorage() ? this.localStorageService.getUserIdStorage() : '';
      this.products$ = this.productsService.list(id)
    }
  }

  handleNavigateToRegisterNewProduct(){
    this.router.navigateByUrl('/products/new')
  }
}
