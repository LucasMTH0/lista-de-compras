import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserSignal} from '../../signals/UserSignal';
import {UserService} from '../../services/user/user.service';
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  providers: [UserSignal],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  userService = inject(UserService)

  handleLogout() {
    this.userService.logout();
  }
}
