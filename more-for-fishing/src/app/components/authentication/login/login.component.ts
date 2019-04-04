import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form')
  htmlForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  login(formData) {
    this.htmlForm.reset();
    console.log(formData);
  };
}
