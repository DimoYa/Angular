import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ArticleDetailsComponent } from './components/articles/article-details/article-details.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent,  canActivate: [AuthenticationGuard] },
  { path: 'register',component: RegisterComponent },
  { path: 'login',component: LoginComponent },
  { path: 'myProfile',component: UserDetailsComponent },
  { path: 'home/:id',component: ArticleDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
