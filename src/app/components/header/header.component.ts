import {Component, computed, effect, Inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserSignal} from '../../signals/UserSignal';
import {JsonPipe} from '@angular/common';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  providers: [UserSignal],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isUserLoggedIn: Boolean = false;
  constructor(protected userSignal: UserSignal, protected  userService: UserService) {

    this.userService.userEmitter.subscribe((user) => {
      this.isUserLoggedIn = user ? true : false;
    })
    computed(() => {
      console.log("usuario alterado: ", this.userSignal.getUser());
    })
  }

  handleLogout() {
    this.userService.logout();
  }

}
