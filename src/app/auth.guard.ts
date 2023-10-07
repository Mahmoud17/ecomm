import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state, router = new Router()) => {


  if (localStorage.getItem("userToken") !== null) {
    return true
  } else {
    router.navigate(['/login'])
    return false
  }
};
