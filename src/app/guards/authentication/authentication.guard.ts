import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';
import { UserService } from '../../services/user/user.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  const localStorageService = inject(LocalStorageService);
  const userStorage = localStorageService.getUserStorage();
  if(JSON.parse(userStorage as string)){
    userService.setUser(JSON.parse(userStorage as string))
    return true;
  }
  router.navigateByUrl('auth/login');
  return false;
};
