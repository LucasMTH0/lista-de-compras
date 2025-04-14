import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {List} from '../../interface/List';
import {Observable} from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  private apiService = inject(ApiService);
  private http = inject(HttpClient)

  create(list: List) {
    return this.http.post(environment.API+'/lists', list, 
      { headers: this.apiService.generateHeaders() }
    );
  }

  list(): Observable<List[]>{
    return this.http.get<List[]>(
      environment.API+'/lists/',
      { headers: this.apiService.generateHeaders() }
    );
  }
 
  get(idList: string){
    return this.http.get(environment.API+'/lists/list/'+idList);
  }

  delete(idList: string){
    return this.http.delete(environment.API+'/lists/list/'+idList);
  }

  update(list: List){
    return this.http.put(environment.API+'/lists/list/', list);
  }
}
