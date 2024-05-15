import { CanActivateFn } from '@angular/router';

export const catalogoGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')=='true') {
    return false
  }else{
    return true;
  }
};

export const prestamosGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')=='true') {
    return false
  }else{
    return true;
  }
};

export const gUsuariosGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')=='true') {
    return false
  }else{
    return true;
  }
};

export const gLibrosGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')=='true') {
    return false
  }else{
    return true;
  }
};
