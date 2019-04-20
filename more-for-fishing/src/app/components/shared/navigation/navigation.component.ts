import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements DoCheck {
  isAuth: boolean;
  isAdmin: boolean;

  constructor(private router: Router,
    private authService: AuthenticationService,
    private userService: UserService) { }

    ngDoCheck(): void {
      this.isAuth = this.authService.isLoggedIn();
      this.isAdmin = this.userService.isAdmin();
    }

    getAvatar() {
      return this.userService.returnUserPhoto();
    }

    getUserName() {
      return this.userService.returnUserName();
    }

    getUserId() {
      return this.userService.returnId();
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
