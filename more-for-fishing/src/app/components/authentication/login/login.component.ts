import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/models/login';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginModel;
  loginMsg: string;
  loginFail: boolean;

  @ViewChild('form')
  htmlForm: NgForm;
  constructor(
    private authService: AuthenticationService,
    private router: Router) {

    this.model = new LoginModel('', '');
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model)
      .subscribe(data => {
        this.successfulLogin(data);
      }, err => {
        this.loginMsg = err;
      });
    this.htmlForm.reset();
  };

  successfulLogin(data): void {
    this.authService.authtoken = data['_kmd']['authtoken'];
    this.authService.user = data['username'];
    localStorage.setItem('authtoken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.loginFail = false;
    this.router.navigate(['/home']);
  }
}
