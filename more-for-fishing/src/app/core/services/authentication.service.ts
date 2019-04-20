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
    private http: HttpClient
  ) { }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value;
  }

  login(usrModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.baseUrl}/login`, usrModel);
  }

  register(usrModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.baseUrl}`, usrModel);
  }

  logout() {
    return this.http.post(`${this.baseUrl}/_logout`, {});
  }

  isLoggedIn() {
    return localStorage.getItem('authtoken') !== null;
  }
}