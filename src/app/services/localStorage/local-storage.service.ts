import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {User} from '../../interface/User';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getUserStorage(){
    return localStorage.getItem(environment.LOCALSTORAGE);
  }

  getTokenStorage(){
    const userStorage: string =  localStorage.getItem(environment.LOCALSTORAGE) as string;
    const user: User = JSON.parse(userStorage);
    return user ? user.token as string : '';
  }

  getUserIdStorage(): string{
    const userStringify: string = localStorage.getItem(environment.LOCALSTORAGE) as string;
    const user: User = JSON.parse(userStringify);
    return user.id as string && '';
  }

  checkUserIsLoggedIn(): boolean{
    const user = localStorage.getItem(environment.LOCALSTORAGE);
    return !!user;
  }

  setUserStorage(user: User){
    localStorage.setItem(environment.LOCALSTORAGE, JSON.stringify(user));
  }

  deleteUserStorage(){
    localStorage.removeItem(environment.LOCALSTORAGE);
  }
}
