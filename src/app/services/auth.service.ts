import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.apiUrl + 'identity/login';
  private registerPath = environment.apiUrl + 'identity/register';

  constructor(private http: HttpClient) { }
  
  public login(data): Observable<any> {
    return this.http.post(this.loginPath, data);
  }

  public register(data): Observable<any> {
    return this.http.post(this.registerPath, data);
  }

  public saveToken(token): void {
    localStorage.setItem('token', token);
  }

  public getToken(token): string {
    return localStorage.getItem('token'); 
  }
}
