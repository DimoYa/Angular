import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  error: string;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  logout(): void {
    this.authenticationService
      .logout()
      .subscribe(res => {
        localStorage.clear();
        this.authenticationService.currentAuthtoken = '';
        this.router.navigate(['/login']);
      }, err => {
        this.error = err;
      });
  }

  isAuth(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  username(): string {
    return this.authenticationService.returnUserName();
  }

  checkIfItIsCurrentUrl(currToCheck: string) : boolean {

    return this.router.url === currToCheck;
  }
}
