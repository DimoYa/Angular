import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  error: string;

  // constructor(private authenticationService: AuthenticationService) { }

  // logout(): void {
  //   this.authenticationService
  //     .logout()
  //     .subscribe(res => {

  //     }, err => {
  //       this.error = err;
  //     });
  // }

  // isAuth(): boolean {
  //   return this.authenticationService.isLogged();
  // }

  // username(): string {
  //   return this.authenticationService.getUsername();
  // }

}
