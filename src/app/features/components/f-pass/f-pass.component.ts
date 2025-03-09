import { ToastrService } from 'ngx-toastr';
import { Forgetpass } from './../../../core/interfaces/forgetpass';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-f-pass',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './f-pass.component.html',
  styleUrls: ['./f-pass.component.scss']
})
export class FPassComponent {

  step: number = 0;


  loading: boolean =false;


  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  });


  verifyResetCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.maxLength(6)])
  });


  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, Validators.required)
  });

  constructor(
    private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {}


  form1() {
    if (this.forgetPasswordForm.valid) {
      this.loading = true;
      this._AuthService.forgetPassword(this.forgetPasswordForm.value).subscribe({
        next: (res: any) => {
          this._ToastrService.success('The code has been sent to the active email!');
          console.log(res);
          this.loading = false;

          this.step = 1;
        },
        error: (error: any) => {
          this._ToastrService.error('Enter a valid email');
          console.log('failed:', error);
          this.loading = false;
        }
      });
    } else {
      this._ToastrService.error('Please enter a valid email!');
    }
  }


  form2() {
    if (this.verifyResetCode.valid) {
      this.loading = true;
      this._AuthService.verifyCode(this.verifyResetCode.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.loading = false;
          this._ToastrService.success('Code verified successfully! You can now set a new password');

          this.step = 2;
        },
        error: (err: any) => {
          console.log(err);
          this.loading = false;
          this._ToastrService.error('Wrong code, please try again');
        }
      });
    } else {
      this._ToastrService.error('Please enter the code correctly!');
    }
  }


  form3() {
    if (this.resetPasswordForm.valid) {
      this.loading = true;
      this._AuthService.resetPassword(this.resetPasswordForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.loading = false;
          this._ToastrService.success('New password has been set successfully.');

          this._Router.navigate(['/home']);
        },
        error: (err: any) => {
          console.log(err);
          this.loading = false;
          this._ToastrService.error('Please try again');
        }
      });
    } else {
      this._ToastrService.error('Please fill in all required fields correctly!');
    }
  }
}
