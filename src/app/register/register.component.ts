import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { RegistrationData } from '../registration-data.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor( private formBuilder: FormBuilder, private  RegistrationService: RegistrationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required], 
      confirmPassword: ['', Validators.required],     
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
     // dob: ['', Validators.required]
    });
  }

  onRegister() {
    console.log('Register link clicked');
    if (this.registerForm.valid) {
      const registrationData: RegistrationData = {
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value,
        confirmPassword: this.registerForm.get('confirmPassword')?.value,
        age: this.registerForm.get('age')?.value,
        gender: this.registerForm.get('gender')?.value,
        email: this.registerForm.get('email')?.value,
        location: this.registerForm.get('location')?.value,
      // Handle form submission logic here
      
    };
    this.RegistrationService.registerUser(registrationData).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        Swal.fire({
          title: "welcome!",
          text: "You have succesfully registered",
          icon: "success"
        });
        // Handle successful registration, e.g., navigate to a confirmation page
      },
      (error) => {
        Swal.fire({
          title: "Oops!",
          text: "error occured!",
          icon: "error"
        });
        console.error('Registration failed:', error);
        // Handle registration failure, e.g., display an error message
      }
    );
  }
    
  }
}