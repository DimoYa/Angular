import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginModel } from '../models/login';
import { RegisterModel } from '../models/register';
import { UpdateModel } from '../models/updateUser';
import { catchError } from 'rxjs/operators';

const appKey = 'kid_rJyhiXLYV';
const appSecret = '21b5781390524ab5900561984ee6b2c9';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentAuthtoken: string;
  currentUser: string;

  constructor(
    private http: HttpClient
  ) { }

  login(loginModel: LoginModel) {
    return this.http.post(
      loginUrl,
      JSON.stringify(loginModel),
      {
        headers: this.createAuthHeaders('Basic')

      }).pipe(
        catchError(this.handleError)
      );
  }

  register(registerModel: RegisterModel): Observable<Object> {
    return this.http.post(
      registerUrl,
      JSON.stringify(registerModel),
      {
        headers: this.createAuthHeaders('Basic')
      }).pipe(
        catchError(this.handleError)
      );
  }

  logout() {
    return this.http.post(
      logoutUrl,
      {},
      {
        headers: this.createAuthHeaders('Kinvey')
      }).pipe(
        catchError(this.handleError)
      );
  }

  update(model: UpdateModel) {
    let userId = localStorage.getItem('userId');
    let updateUrl = `https://baas.kinvey.com/user/${appKey}/${userId}`;
    return this.http.put(
      updateUrl,
      JSON.stringify(model),
      {
        headers: this.createAuthHeaders('Kinvey')
      }).pipe(
        catchError(this.handleError)
      );
  }

  isLoggedIn() {
    return this.currentAuthtoken === localStorage.getItem('authtoken');
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value;
  }

  isAdmin() {
    let username: string = localStorage.getItem('username');

    return username === 'Admin';
  }

  get user() {
    return this.currentUser;
  }

  set user(value: string) {
    this.currentUser = value;
  }

  private createAuthHeaders(type: string): HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
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