import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form')
  form: FormGroup;
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.authService.login(this.form.value)
    .subscribe((data) => {
      this.authService.authtoken = data['_kmd']['authtoken'];
          localStorage.setItem('authtoken', data['_kmd']['authtoken']);
          localStorage.setItem('username', data['username']);
          localStorage.setItem('id', data['_id']);
          localStorage.setItem('photo', data['photo']);
          this.router.navigate(['/home']);
      });
    this.form.reset();
  };

  get f() {
    return this.form.controls;
  };
}
