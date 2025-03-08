// import { TestBed } from '@angular/core/testing';

// import { AuthService } from './auth.service';

// describe('AuthService', () => {
//   let service: AuthService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(AuthService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { User } from './../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  forgetPassword(value: any) {
    throw new Error('Method not implemented.');
  }
  verifyCode(value: Partial<{ resetCode: null; }>) {
    throw new Error('Method not implemented.');
  }
  resetPassword(value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private _HttpClient: HttpClient) { }

  signUp(userData: User): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData);
  }
}
