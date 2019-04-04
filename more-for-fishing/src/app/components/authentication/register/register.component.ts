import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  getNumbers = ['359', '124', '152'];
  jobTitles = ['Developer', 'QA', 'Designer'];

  @ViewChild('form')
  htmlForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  register(formData) {
    this.htmlForm.reset();
    console.log(formData);
  };
}
