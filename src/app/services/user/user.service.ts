import {EventEmitter, Injectable, signal} from '@angular/core';
import {User} from '../../interface/User';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../localStorage/local-storage.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = signal<User | null>(null)

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  setUser(user: User){
    this.user.set(user)
  }

  login(user: User){
    return this.http.post(environment.API+'/user/login', user)
  }

  logout(){
    this.localStorageService.deleteUserStorage()
    this.user.set(null)
    this.router.navigateByUrl('/auth/login')
  }

  register(user: User){
    return this.http.post(environment.API+'/user', user)
  }

}
