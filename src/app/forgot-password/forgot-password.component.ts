import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',  
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  
})
export class ForgotPasswordComponent {
  resetForm =new FormGroup({
  email:new FormControl({}),
  emailPassword:new FormControl({}),
  verificationCode: new FormControl({}),
  newPassword:new FormControl({}),
  confirmPassword:new FormControl({}),

 })
email: any;
  router: any;
  

constructor(){}
ngOnInit(): void{
  this.resetPassword();
  this.getVerificationCode();

}
getVerificationCode = ()=>{
  
}


resetPassword = ()=>{
  if (this.resetForm.valid) {
    console.log('Password Reset Successfully!', this.resetForm.value);
    this.router.navigate(['/login']);
  }
}


}
