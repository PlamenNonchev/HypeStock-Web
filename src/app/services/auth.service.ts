import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


const loginPath = environment.apiUrl + 'identity/login';
const registerPath = environment.apiUrl + 'identity/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  
  public login(data): Observable<any> {
    return this.http.post(loginPath, data);
  }

  public register(data): Observable<any> {
    return this.http.post(registerPath, data);
  }

  public logout(): void {
    localStorage.clear();
  }

  public saveToken(token): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    return localStorage.getItem('token'); 
  }

  public isAuthenticated(): boolean {
    if (this.getToken()){
      return true;
    }

    return false
  }
}
