import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { LogingService } from 'src/app/loging.service';
=======

>>>>>>> origin/frontend

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
<<<<<<< HEAD
    private router: Router,
    private logingService: LogingService
=======
    private router: Router
>>>>>>> origin/frontend
  ) { }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
<<<<<<< HEAD
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
=======
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log('Logged in:', this.loginForm.value);
      // Navigate to the "symptoms" page
      this.router.navigate(['/symptoms']);
>>>>>>> origin/frontend
    }
  }

  onCancel() {
<<<<<<< HEAD
   this.loginForm.reset();
  this.router.navigate(['/']);
=======
    // Reset the form and navigate to the desired page
    this.loginForm.reset();
    this.router.navigate(['/']);
  }

  navigateToSymptoms() {
    // Navigate to the "symptoms" page
    this.router.navigate(['/symptoms']);
>>>>>>> origin/frontend
  }
}