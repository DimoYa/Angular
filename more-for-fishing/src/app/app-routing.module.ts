import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/shared/landing/landing.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ArticleDetailsComponent } from './components/articles/article-details/article-details.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';
import { EditArticleComponent } from './components/articles/edit-article/edit-article.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'articles'},
  { path: 'articles', component: LandingComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'login',component: LoginComponent },
  { path: 'myProfile',component: UserDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: 'articles/:id',component: ArticleDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: 'create',component: CreateArticleComponent, canActivate: [AuthenticationGuard] },
  { path: 'edit/:id',component: EditArticleComponent, canActivate: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
