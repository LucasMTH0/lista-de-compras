import {Component, Inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {UserService} from './services/user/user.service';
import {LocalStorageService} from './services/localStorage/local-storage.service';
import {User} from './interface/User';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(
    protected userService: UserService,
    protected localStorageService: LocalStorageService,
  ) {}

  ngOnInit(){
    const userString= this.localStorageService.getUserStorage()
    const userFormatted: User = JSON.parse(userString as string);
    if( userFormatted ) {
      this.userService.setUser(userFormatted)
    }
  }
}
