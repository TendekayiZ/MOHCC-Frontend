import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LogingService } from 'src/app/loging.service';

@Component({
  // ...
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private logingService: LogingService
  ) { }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    // ...
  }

  onSubmit() {
    console.log('login bt clicked');
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      const login$ = this.logingService.login(username, password);
      if (login$ instanceof Observable) {
        login$.subscribe(
          () => {
            console.log('Login successful:', this.loginForm.value);
            this.router.navigate(['/symptoms']);
          },
          (error: any) => {
            console.log('Login failed:', error);
            // Handle login failure, display error message, etc.
          }
        );
      } else {
        console.log(' in LoginService should return an Observable.');
      }
    }
  }

  onCancel() {
    this.loginForm.reset();
    this.router.navigate(['/']);
  }
}