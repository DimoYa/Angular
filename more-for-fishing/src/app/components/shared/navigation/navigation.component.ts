import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';
import UserModel from 'src/app/core/models/user-model';
import UserRole from 'src/app/core/models/user-role';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck {
  isAuth: boolean;
  userData: UserModel;
  roleId: string;
  id: string;
  isAdmin;

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.id = this.authService.returnId();

    this.authService.getUserData(this.id)
      .subscribe(data => {
        this.userData = data;
      });

    this.authService.getUserRole(this.id)
      .subscribe(data => {
        this.roleId = data[0]['roleId'];
      });
    }

    ngDoCheck(): void {
      this.isAuth = this.authService.isLoggedIn();
   
    }

    getAvatar() {
      return this.authService.returnUserPhoto();
    }

    getUserName() {
      return this.authService.returnUserName();
    }

    logout(): void {
      this.authService
        .logout()
        .subscribe(res => {
          localStorage.clear();
          this.authService.currentAuthtoken = '';
          this.router.navigate(['/login']);
        });
    }

    checkIfItIsCurrentUrl(currToCheck: string): boolean {

      return this.router.url === currToCheck;
    }
  }
