import { Forgetpass } from './../../../core/interfaces/forgetpass';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../../../core/services/auth/auth.service';

@Component({
  selector: 'app-f-pass',
  standalone: true, // إن كنت تستخدمين مكونات Standalone، وإلا تأكدي من إعلان المكون في الموديول
  imports: [ReactiveFormsModule],
  templateUrl: './f-pass.component.html',
  styleUrls: ['./f-pass.component.scss']
})
export class FPassComponent {

  step: number = 0;
  loding: boolean=true
  // نموذج نسيان كلمة المرور
  forgetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  });

  // نموذج التحقق من كود إعادة التعيين
  verifyResetCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.maxLength(6)])
  });

  // نموذج إعادة تعيين كلمة المرور
  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, Validators.required)
  });


  constructor(private _AuthService: AuthService ) { }



  // الخطوة 1: إرسال الإيميل
  form1() {
    if (this.forgetPasswordForm.valid)
    // let Forgetpass = this.forgetPasswordForm.value;
    this._AuthService.forgetPassword(this.forgetPasswordForm.value).subscribe({
      next: (res: any) => {
    console.log(res);
  this.step=1;
 this.loding = false;},
 error: (error: any) => {
  console.log('failed:', error);

  this.loding = false;
},
    })

    // if (this.forgetPasswordForm.valid) {

    //   this.loding = true;
    //   this._AuthService.forgetPassword(this.forgetPasswordForm.value).subscribe({
    //     next: (res: any) => {
    //       console.log(res);
    //       this.step=1;
    //       this.loding = false;
    //       if (res?.resetCode) {
    //         alert(`كود إعادة التعيين هو: ${res.resetCode}`);
    //       } else {
    //         alert('تم إرسال الكود إلى الإيميل بنجاح!');
    //       }
    //       this.step = 1;
    //     },
    //     error: (err: any) => {
    //       console.log(err);
    //       this.loding = false;
    //       alert('حدث خطأ أثناء إرسال الإيميل. تأكد من صحة الإيميل وحاول مجددًا.');
    //     }
    //   });
    // } else {
    //   alert('الرجاء إدخال إيميل صحيح!');
    // }
  }

  // الخطوة 2: التحقق من الكود
  form2() {
    if (this.verifyResetCode.valid) {
      this.loding = true;
      this._AuthService.verifyCode(this.verifyResetCode.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.loding = false;
          alert('تم التحقق من الكود بنجاح! يمكنك الآن تعيين كلمة مرور جديدة.');
          this.step = 2;
        },
        error: (err: any) => {
          console.log(err);
          this.loding = false;
          alert('الكود غير صحيح أو انتهت صلاحيته. حاول مجددًا.');
        }
      });
    } else {
      alert('الرجاء إدخال الكود بشكل صحيح!');
    }
  }

  // الخطوة 3: إعادة تعيين كلمة المرور
  form3() {
    if (this.resetPasswordForm.valid) {
      this.loding = true;
      this._AuthService.resetPassword(this.resetPasswordForm.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.loding = false;
          alert('تم تعيين كلمة المرور الجديدة بنجاح!');
        },
        error: (err: any) => {
          console.log(err);
          this.loding = false;
          alert('حدث خطأ أثناء إعادة تعيين كلمة المرور. تأكد من البيانات وحاول مجددًا.');
        }
      });
    } else {
      alert('الرجاء تعبئة الحقول المطلوبة بشكل صحيح!');
    }
  }
}
