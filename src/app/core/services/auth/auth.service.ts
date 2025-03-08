import { Forgetpass } from './../../interfaces/forgetpass';
import { User } from './../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from '../../interfaces/LoginData';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  isLogin: any;
  r: any;

pid= inject(PLATFORM_ID)

login: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor(private _HttpClient: HttpClient) {


if (isPlatformBrowser(this.pid)){

    if (localStorage.getItem('token')!==null) {
      this.login.next(true)
      } else{ this.login.next(false)}
   }}





  verifyToken (t: any):Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/auth/verifyToken',
    {headers:{
      token:t,
    },});
  }

  doVerifyToken() {
    this.verifyToken(localStorage.getItem('token')).subscribe({
      next: (res) => {
        console.log('hello from verify token');
        console.log(res);
        this.login.next(true);
      },
      error: () => {
        this.login.next(false);
        this.r.navigate(['/login']);
      }
    });
  }





  signUp(data: any): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data);
  }


  signin(loginData: any): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', loginData);
  }

forgetPassword(Forgetpass:any): Observable<any> {
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',Forgetpass);
}


verifyCode(Forgetpass:any): Observable<any> {
  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',Forgetpass);
}


resetPassword(Forgetpass:any): Observable<any> {
  return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',Forgetpass);
}


}



