import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { RegisterModel } from 'src/app/core/models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  getNumbers = ['359', '124', '152'];
  model: RegisterModel;

  @ViewChild('form')
  htmlForm: NgForm;
  constructor(
    private authService: AuthenticationService,
    private router: Router) {

    this.model = new RegisterModel('', '', '', '', '', '', '');

  }

  ngOnInit() {
  }

  register() {
    delete this.model['confirmPassword'];
    this.authService.register(this.model)
    .subscribe(res => {
      this.router.navigate(['/login']);
    });
    this.htmlForm.reset();
  };
}
