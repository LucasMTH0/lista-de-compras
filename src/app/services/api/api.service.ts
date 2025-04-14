import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private localStorageService = inject(LocalStorageService);
  constructor() { }

  public generateHeaders(){
    return  {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.localStorageService.getTokenStorage()
    }
  }
}
