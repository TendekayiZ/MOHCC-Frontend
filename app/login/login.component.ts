import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
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
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log('Logged in:', this.loginForm.value);
      // Navigate to the "symptoms" page
      this.router.navigate(['/symptoms']);
    }
  }

  onCancel() {
    // Reset the form and navigate to the desired page
    this.loginForm.reset();
    this.router.navigate(['/']);
  }

  navigateToSymptoms() {
    // Navigate to the "symptoms" page
    this.router.navigate(['/symptoms']);
  }
}