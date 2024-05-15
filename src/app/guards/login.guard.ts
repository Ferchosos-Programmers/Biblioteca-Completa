import { CanActivateFn, CanMatchFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token') == 'true') {
    return true;
  } else {
    return false;
  }
};

export const registroGuard: CanMatchFn = (route, state) => {
  if (localStorage.getItem('token') == 'true') {
    return false;
  } else {
    return true;
  }
};