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
        console.log(data);
      }, err => {
        this.loginMsg = err.error['description'];
      });
    this.htmlForm.reset();
  };

}
