import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import UserModel from 'src/app/core/models/user-model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users$: Observable<UserModel[]>;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(() => {
        this.users$ = this.userService.getAllUsers();
      })
    console.log(this.users$);
  }
 
  deleteUser(userId) {
    this.userService.destroy(userId)
      .subscribe(res => {
        this.users$ = this.userService.getAllUsers();
      });
  }
}