import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import UserModel from '../models/user-model';
import { Observable } from 'rxjs';
import { appKey } from '../../kinvey.tokens';
import UserRole from '../models/user-role';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly baseUrl = `https://baas.kinvey.com/user/${appKey}`;
  private readonly retrieveUsersUrl = `https://baas.kinvey.com/roles/${appKey}`;

  currentAuthtoken: string;

  constructor(
    private http: HttpClient
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
    return this.http.get(``)
  }

  getUserRole(Id): Observable<UserRole[]> {
   let test = this.http.get<UserRole>(`${this.baseUrl}/${Id}/roles`);
    return this.http.get<UserRole[]>(`https://baas.kinvey.com/user/kid_rJyhiXLYV/5cb238aab424160225d8ab67/roles`);
  }

  destroy(Id) {
    return this.http.delete(`${this.baseUrl}/${Id}`);
  }

  disableUser(Id) {
    return this.http.delete(`${this.baseUrl}/${Id}?soft=true`);
  }

  enableleUser(Id) {
    return this.http.post(`${this.baseUrl}/${Id}_restore` , {});
  }
}