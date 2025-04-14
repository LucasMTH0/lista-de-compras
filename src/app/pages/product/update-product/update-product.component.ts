import {Component, DestroyRef} from '@angular/core';
import {ProductFormComponent} from '../../../components/product-form/product-form.component';
import {Observable} from 'rxjs';
import {Product} from '../../../interface/Product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../../services/products/products.service';
import {LocalStorageService} from '../../../services/localStorage/local-storage.service';
import {AsyncPipe} from '@angular/common';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-update-product',
  imports: [
    ProductFormComponent
  ],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {
  idProduct: string = '';
  idUser: string = '';
  product: Product | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private destroyRef: DestroyRef,
    private productService: ProductsService,
    private localStorage: LocalStorageService,
  ) {
    this.idProduct = this.route.snapshot.paramMap.get('id') as string;
    this.idUser = this.localStorage.getUserIdStorage() as string;
    this.getProduct();
  }
  getProduct(){
    this.productService.get(this.idProduct)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((product: Product) => {
        console.log(product);
        this.product = product
      });
  }
}
