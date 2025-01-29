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
  list(id: string): Observable<Product[]>{
    return this.http.get<Product[]>(environment.API+`/products/${id}`)
  }
  get(id: string){
    return this.http.get(environment.API+`/products/${id}`)
  }
}
