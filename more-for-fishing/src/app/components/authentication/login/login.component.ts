import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/core/models/login';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginModel;

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
    .subscribe((data) => {
      this.authService.authtoken = data['_kmd']['authtoken'];
          this.authService.user = data['username'];
          localStorage.setItem('authtoken', data['_kmd']['authtoken']);
          localStorage.setItem('username', data['username']);
          this.router.navigate(['/home']);
      });
    this.htmlForm.reset();
  };
}
