import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('form')
  form: FormGroup;
  getNumbers = ['359', '124', '152'];

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      fullname: ['', [Validators.required, Validators.pattern(/[A-Z][a-z]+\s[A-z][a-z]+/)]],
      email: ['', [Validators.required, Validators.pattern(/\S+@\S+/)]],
      phoneNumber:[ '', Validators.pattern(/\d{9}/)],
      password: ['', [Validators.required, Validators.pattern(/[A-Za-z0-9]{3,16}/)]],
      confirmPassword: ['', Validators.required],
      photo: ['', Validators.nullValidator]
    });
  }

  register() {
    delete this.form.value['confirmPassword'];
    this.authService.register(this.form.value)
    .subscribe(res => {
      this.router.navigate(['/login']);
    });
    this.form.reset();
  };

  get f() {
    return this.form.controls;
  };
}
