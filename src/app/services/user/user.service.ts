import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../../interface/User';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../localStorage/local-storage.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userEmitter = new EventEmitter<User | null>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  setUser(user: User){
    this.userEmitter.next(user)
  }

  login(user: User){
    return this.http.post(environment.API+'/user/login', user)
  }

  logout(){
    this.localStorageService.deleteUserStorage()
    this.userEmitter.next(null)
    this.router.navigateByUrl('/')
  }

  register(user: User){
    return this.http.post(environment.API+'/user', user)
  }

}
