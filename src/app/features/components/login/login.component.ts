import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from './../../../core/services/auth/auth.service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  errorMsg: boolean = false;
  load: boolean = false;

    _AuthService =Inject(AuthService);




    // تعريف النموذج مع إضافة التحقق من تطابق كلمة المرور
    registerForm = new FormGroup({
     email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    }, );


    onSubmit() {
      if (this.loginForm.valid) {
    console.log(this.loginForm.value);
    this.load = true;
        this._AuthService.signin(this.loginForm.value).subscribe({
          next: (response: any) => {
            console.log('successful:', response);
            this.errorMsg = false;
            this.load = false;
            // this.emailExistsError = false;
          },
          error: (error: any) => {
            console.log(' failed:', error);
            this.errorMsg = true;
            this.load = false;

      },
      complete:()=>{},});}
      else{ console.log(
    "form is invalid");}
    }}






