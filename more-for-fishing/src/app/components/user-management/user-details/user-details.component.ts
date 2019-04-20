import { Component, OnInit } from '@angular/core';
import UserModel from 'src/app/core/models/user-model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: string;
  userData: UserModel;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private authService: AuthenticationService

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserData(this.id)
      .subscribe(data => {
        this.userData = data;
        console.log(this.userData);
      });

  }
  destroy() {
    this.userService.destroy(this.id)
    .subscribe(res => {
      localStorage.clear();
      this.authService.currentAuthtoken = '';
      this.router.navigate(['/register']);
    });
  }
 
}
