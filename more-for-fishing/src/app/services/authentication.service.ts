import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const appKey = '';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getAuthtoken(): string {
    return localStorage.getItem('authToken');
  }

  getUsername(): string {
    return localStorage.getItem('username');
  }

  getUserId(): string {
    return localStorage.getItem('userId');
  }

  isLogged(): boolean {
    return this.getAuthtoken() !== null;
  }

  login(payload: object): Observable<Object> {
    return this.http.post<object>(loginUrl, JSON.stringify(payload))
      .pipe(
        catchError(this.handleError)
      );
  }

  register(payload: Object): Observable<Object> {
    return this.http.post<object>(registerUrl, JSON.stringify(payload))
      .pipe(
        catchError(this.handleError)
      );
  }

  logout(): Observable<Object> {
    return this.http.post<object>(logoutUrl, {})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(error.error);
      console.log('Network error');
    } else {
      console.error(error.error);
      console.log('Backend error');
    }

    return throwError(`${error.error['description']}`);
  }
}
