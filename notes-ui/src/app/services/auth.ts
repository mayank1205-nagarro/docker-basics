import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080'; // your Spring Boot backend

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    // Example: check if JWT token exists in localStorage
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { username, password }, { observe: 'response' });
  }

  signup(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, { username, email, password }, { observe: 'response' });
  }
}
