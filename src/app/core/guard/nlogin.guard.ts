import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const nloginGuard: CanActivateFn = (route, state) => {


  let _AuthService =inject(AuthService);
  let _Router =inject(Router);

  if(_AuthService.login.value === false){
  return true;

  }else{
    _Router.navigate(['/home']);
  }


  return true;
};
