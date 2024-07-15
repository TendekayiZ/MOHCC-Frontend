import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class RegistrationService {
  private baseUrl = ' http://localhost:8080/api/students'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    const url = `${this.baseUrl}/SignUp`; // Replace with the registration endpoint in your backend
    return this.http.post(url, userData);
  }
}
