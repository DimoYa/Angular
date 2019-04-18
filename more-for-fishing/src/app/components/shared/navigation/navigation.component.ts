import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements DoCheck {
  isAuth: boolean;
  isAdmin: boolean;

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngDoCheck(): void {
    this.isAuth = this.authService.isLoggedIn();
    this.isAdmin = this.authService.isAdmin();
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
