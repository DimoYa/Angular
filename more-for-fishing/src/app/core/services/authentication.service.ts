import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import UserModel from '../models/user-model';
import { Observable } from 'rxjs';
import { appKey } from '../../kinvey.tokens';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly baseUrl = `https://baas.kinvey.com/user/${appKey}`;

  currentAuthtoken: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(usrModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.baseUrl}/login`, usrModel);
  }

  register(usrModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.baseUrl}`, usrModel);
  }

  logout() {
    return this.http.post(`${this.baseUrl}/_logout`, {});
  }

  updateUser(usrModel: UserModel, id: string): Observable<UserModel> {
    return this.http.put<UserModel>(this.baseUrl + `/${id}`, usrModel);
  }

  isLoggedIn() {
    return localStorage.getItem('authtoken') !== null;
  }

  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true';
  }

  isCurrentUser(): boolean {
    return `/myProfile/${this.returnId()}` === this.router.url;
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value;
  }

  returnId(): string {

    return localStorage.getItem('id');
  }

  returnUserName(): string {

    return localStorage.getItem('username');
  }

  returnUserPhoto(): string {

    return localStorage.getItem('photo');
  }

  getUserData(profileId): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}/${profileId}`);
  }

  getAllUsers() {
    return this.http.get<UserModel[]>(`${this.baseUrl}/`);
  }

  destroy(Id) {
    return this.http.delete(`${this.baseUrl}/${Id}`);
  }

  disableUser(Id) {
    return this.http.delete(`${this.baseUrl}/${Id}?soft=true`);
  }

}