import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../../services/products/products.service';
import {LocalStorageService} from '../../../services/localStorage/local-storage.service';
import {Observable} from 'rxjs';
import {Product} from '../../../interface/Product';
import {AsyncPipe, CommonModule} from '@angular/common';
import {ApiResponse} from '../../../interface/ApiResponse';
import {ToastrService} from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';
import {convertNumberToCurrencyBRL} from '../../../util/convert-number-to-currency-BRL';
@Component({
  selector: 'app-detail-product',
  imports: [
    AsyncPipe,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent {
  idProduct: string = '';
  idUser: string = '';
  product$: Observable<Product> | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private productService: ProductsService,
    private localStorage: LocalStorageService,
  ) {
    this.idProduct = this.route.snapshot.paramMap.get('id') as string;
    this.idUser = this.localStorage.getUserIdStorage() as string;
    this.getProduct();
  }

  getProduct(){
    this.product$ = this.productService.get(this.idProduct)
  }

  handleDeleteProduct(){
    this.productService.delete(this.idProduct).subscribe((deleteSuccessful: ApiResponse) => {
      this.toastr.success(deleteSuccessful.message);
      this.router.navigate(['/']);
    })
  }

  handleNavigateToShopUrl(url: string){
    window.open(url, '_blank');
  }

  handleEditProduct(){
    this.router.navigateByUrl(`/products/edit/${this.idProduct}`);
  }

  protected readonly convertNumberToCurrencyBRL = convertNumberToCurrencyBRL;
}
