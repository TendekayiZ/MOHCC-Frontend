import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogingService {
  
  private baseUrl = 'http://localhost:8080/api/students'; // Replace with your actual backend URL

  constructor(private http: HttpClient) { }

  authenticate(username: any, password: any): Observable<any> {
    const url = `${this.baseUrl}/login;` //Replace with the authentication endpoint in your backend
    const body = { username, password };
    return this.http.post(url, body);
  }

  // Other methods in LoginService...

}