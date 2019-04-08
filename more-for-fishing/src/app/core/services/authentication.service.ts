import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginModel } from '../models/login';
import { RegisterModel } from '../models/register';
import { UpdateModel } from '../models/updateUser';

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
      JSON.stringify(loginModel));
  }

  register(registerModel: RegisterModel): Observable<Object> {
    return this.http.post(
      registerUrl,
      JSON.stringify(registerModel));
  }

  logout() {
    return this.http.post(
      logoutUrl, {});
  }

  update(model: UpdateModel) {
    let userId = localStorage.getItem('userId');
    let updateUrl = `https://baas.kinvey.com/user/${appKey}/${userId}`;
    return this.http.put(
      updateUrl,
      JSON.stringify(model));
  }

  isLoggedIn() {
    return  localStorage.getItem('authtoken') !== null;
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

  returnUserName(): string {

    return localStorage.getItem('username');
  }

  get user() {
    return this.currentUser;
  }

  set user(value: string) {
    this.currentUser = value;
  }
}