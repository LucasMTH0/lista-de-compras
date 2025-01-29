import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../../interface/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  create(product: any){
    return this.http.post(environment.API+'/products', product)
  }
  list(idUser: string): Observable<Product[]>{
    return this.http.get<Product[]>(environment.API+`/products/${idUser}`)
  }
  get(idUser: string, idProduct: string){
    return this.http.get<Product>(environment.API+`/products/${idUser}/${idProduct}`)
  }
  update( idProduct: string, product: Product){
    return this.http.put(environment.API+`/products/${idProduct}`, product)
  }
  delete(idProduct: string){
    return this.http.delete(environment.API+`/products/${idProduct}`)
  }
}
