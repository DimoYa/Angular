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
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.authService.getUserData(this.id)
      .subscribe(data => {
        this.userData = data;
        console.log(this.userData);
      });

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
