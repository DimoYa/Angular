import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ArticleDetailsComponent } from './components/articles/article-details/article-details.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'login',component: LoginComponent },
  { path: 'myProfile',component: UserDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: 'home/:id',component: ArticleDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: 'create',component: CreateArticleComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
