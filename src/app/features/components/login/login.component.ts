import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  errorMsg: boolean = false;
  loading: boolean = false;




  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  constructor(private _AuthService: AuthService,
private _Router:Router ) {}

  onSubmit() {
    // استخدام registerForm بدلاً من loginForm
    if (this.registerForm.valid) {
      const loginData = this.registerForm.value;
      console.log(loginData);
      this.loading = true;
      this._AuthService.signin(loginData).subscribe({
        next: (response: any) => {
          console.log('successful:', response);
          this.errorMsg = false;
          this.loading = false;
this._AuthService.login.next(true)
          localStorage.setItem('token', response.token)
this._Router.navigate(['/home'])


        },
        error: (error: any) => {
          console.log('failed:', error);
          this.errorMsg = true;
          this.loading = false;
        },
        complete: () => {},
      });
    } else {
      console.log("form is invalid");
    }
  }
}
