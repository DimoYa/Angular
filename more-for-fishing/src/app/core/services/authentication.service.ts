import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const appKey = 'kid_rJyhiXLYV';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentAuthtoken: string;
  currentUser: string;
  currentId: string;

  constructor(
    private http: HttpClient
  ) { }

  login(loginModel) {
    return this.http.post(loginUrl, loginModel);
  }

  register(registerModel) {
    return this.http.post(registerUrl, registerModel);
  }

  logout() {
    return this.http.post(
      logoutUrl, {});
  }

  // update(id) {
  //   let userId = localStorage.getItem('userId');
  //   let updateUrl = `https://baas.kinvey.com/user/${appKey}/${id}`;
  //   return this.http.put(
  //     updateUrl,
  //     JSON.stringify(model));
  // }

  isLoggedIn() {
    return localStorage.getItem('authtoken') !== null;
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

  returnId(): string {

    return localStorage.getItem('id');
  }

  getUserData(profileId) {
    return this.http.get(`https://baas.kinvey.com/user/${appKey}/${profileId}`);
  }

  getAllUsers() {
    return this.http.get(`https://baas.kinvey.com/group/${appKey}`)
  }

  destroy(Id) {
    return this.http.delete(`https://baas.kinvey.com/user/${appKey}/${Id}`);
  }

  get user() {
    return this.currentUser;
  }

  set user(value: string) {
    this.currentUser = value;
  }

  get id() {
    return this.currentId;
  }

  set id(value: string) {
    this.currentId = value;
  }
}