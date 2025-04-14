import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../../interface/Product';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  private http = inject(HttpClient)
  public apiService = inject(ApiService)

  private readonly products$ = this.http.get<Product[]>(environment.API+`/products`,
    {headers: this.apiService.generateHeaders()}
  )

  public products = toSignal(this.products$)

  list(){
    return this.http.get<Product[]>(environment.API+`/products`,
      {headers: this.apiService.generateHeaders()}
    )
  }

  create(product: any){
    return this.http.post(environment.API+'/products', product)
  }

  get(idProduct: string){
    return this.http.get<Product>(environment.API+`/products/${idProduct}`,
      {headers: this.apiService.generateHeaders()}
    )
  }

  update( idProduct: string, product: Product){
    return this.http.put<Product>(environment.API+`/products/${idProduct}`, product)
  }
  delete(idProduct: string){
    return this.http.delete(environment.API+`/products/${idProduct}`)
  }
}
