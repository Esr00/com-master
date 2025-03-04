import { AuthService } from './../../../core/services/auth/auth.service';
import { Inject } from '@angular/core';

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { format } from 'path';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorMsg: boolean = false;
  // emailExistsError: boolean = false;  // متغيّر لتخزين حالة خطأ البريد الإلكتروني المكرر

loading: boolean = false;

  _AuthService =Inject(AuthService)
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
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
    rePassword: new FormControl(null, Validators.required),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, { validators: this.passwordMatchValidator() });


  onSubmit() {
    if (this.registerForm.valid) {
  console.log(this.registerForm.value);
  this.loading = true;
      this._AuthService.signUp(this.registerForm.value).subscribe({
        next: (response: any) => {
          console.log('Registration successful:', response);
          this.errorMsg = false;
          this.loading = false;
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


//   onSubmit() {
//     if (this.registerForm.valid) {
//       console.log(this.registerForm.value);  // طباعة البيانات للتأكد
//       this.registerForm.reset();  // تفريغ النموذج بعد الإرسال
//     } else {
//       console.log("Form is not valid!");
//       error: (error: any) => {
//         console.error('Registration failed:', error);
//         this.errorMsg = true;
// this.loading = false;

//    if (error?.error?.message && error.error.message.includes('email already exists')) {
//   this.emailExistsError = true;
// } else {
//   this.emailExistsError = false;
// }

//     }
//   }

//   }}


