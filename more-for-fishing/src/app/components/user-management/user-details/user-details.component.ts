import { Component, OnInit } from '@angular/core';
import UserModel from 'src/app/core/models/user-model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.id = this.authService.returnId();
    this.authService.getUserData(this.id)
      .subscribe(data => {
        this.userData = data;
      });

  }

  updateMyUserInfo() {
    this.router.navigateByUrl(`myProfile/edit/${this.id}`);
  }

  destroy() {
    this.authService.destroy(this.id)
    .subscribe(res => {
      localStorage.clear();
      this.authService.currentAuthtoken = '';
      this.router.navigate(['/register']);
    });
  }
 
}
