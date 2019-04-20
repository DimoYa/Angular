import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import UserModel from 'src/app/core/models/user-model';

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
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
  }
  ngOnInit() {

    this.currentUserId = this.authService.returnId();
    this.id = this.route.snapshot.params['id'];
    this.authService.getUserData(this.id)
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
    this.authService.updateUser(body, this.id)
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
