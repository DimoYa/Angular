import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import UserModel from 'src/app/core/models/user-model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @ViewChild('form') updateUserForm: FormGroup;
  getNumbers = ['359', '124', '152'];
  id: string;
  currentUserId: string;
  email: string;
  userData: UserModel;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
  }
  ngOnInit() {

    this.currentUserId = this.userService.returnId();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserData(this.id)
      .subscribe(data => {
        this.userData = data;
        this.email = this.userData['email'];
      });

    this.updateUserForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern(/[A-Z][a-z]+\s[A-z][a-z]+/)]],
      phoneNumber: ['', Validators.pattern(/\d{9}/)],
      photo: ['', Validators.nullValidator]
    });
  }

  updateUser() {
    const body = this.updateUserForm.value;
    body['email'] = this.email;
    this.userService.updateUser(body, this.id)
      .subscribe(res => {
        if (this.id === this.currentUserId) {
          localStorage['photo'] = body['photo'];
        }
        this.router.navigate([`myProfile/${this.id}`]);
      });
  };

  get f() {
    return this.updateUserForm.controls;
  };
}
