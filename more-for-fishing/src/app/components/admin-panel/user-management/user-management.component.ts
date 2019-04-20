import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import UserModel from 'src/app/core/models/user-model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users$: Observable<UserModel[]>;

  constructor(
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getAllUsers()
      .subscribe(() => {
        this.users$ = this.authService.getAllUsers();
      })
    console.log(this.users$);
  }
 
  deleteUser(userId) {
    this.authService.destroy(userId)
      .subscribe(res => {
        this.users$ = this.authService.getAllUsers();
      });
  }
}