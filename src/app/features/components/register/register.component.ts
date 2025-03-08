import { User } from './../../../core/interfaces/user';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Inject } from '@angular/core';

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { format } from 'path';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorMsg: boolean = false;
  // emailExistsError: boolean = false;  // متغيّر لتخزين حالة خطأ البريد الإلكتروني المكرر

loading: boolean = false;

constructor(private _AuthService: AuthService,
  private _Router:Router) {}

  // _AuthService =Inject(AuthService)
  router: any;

  passwordMatchValidator(): ValidatorFn {
    return (form: AbstractControl): { [key: string]: boolean } | null => {
      const password = form.get('password')?.value;
      const rePassword = form.get('rePassword')?.value;
      return password === rePassword ? null : { didntMatch: true };
    };
  }

  // تعريف النموذج مع إضافة التحقق من تطابق كلمة المرور
  registerForm = new FormGroup({
    name: new FormControl( '', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl( '', [Validators.required, Validators.email]),
    password: new FormControl( '', Validators.required),
    rePassword: new FormControl( '', Validators.required),
    phone: new FormControl( '', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, { validators: this.passwordMatchValidator() });


  onSubmit() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;

  console.log(data);
  this.loading = true;



      this._AuthService.signUp(data).subscribe({
        next: (response: any) => {
          console.log('Registration successful:', response);
          this.errorMsg = false;
          this.loading = false;
          this._Router.navigate(['/home'])
          // this.emailExistsError = false;
        },
        error: (error: any) => {
          console.log('Registration failed:', error);
          this.errorMsg = true;
          this.loading = false;

    },
    complete:()=>{},});}
    else{ console.log(
  "form is invalid");}
  }}


