import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/shared/landing/landing.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ArticleDetailsComponent } from './components/articles/article-details/article-details.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { UserDetailsComponent } from './components/user-management/user-details/user-details.component';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';
import { EditArticleComponent } from './components/articles/edit-article/edit-article.component';
import { UpdateUserComponent } from './components/user-management/update-user/update-user.component';
import { ArticleListComponent } from './components/articles/article-list/article-list.component';
import { EditCommentComponent } from './components/comments/edit-comment/edit-comment.component';
import { UserManagementComponent } from './components/admin-panel/user-management/user-management.component';
import { ArticleManagementComponent } from './components/admin-panel/article-management/article-management.component';
import { AdminGuard } from './core/guards/admin.guard';
import { UserManagementGuard } from './core/guards/user-management.guard';
import { AuthenticatedUsersGuard } from './core/guards/authenticated-users.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'articles'},
  { path: 'articles', component: LandingComponent },
  { path: 'register',component: RegisterComponent, canActivate: [AuthenticatedUsersGuard] },
  { path: 'login',component: LoginComponent, canActivate: [AuthenticatedUsersGuard]},
  { path: 'myProfile/:id',component: UserDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: 'myProfile/:id/edit',component: UpdateUserComponent, canActivate: [AuthenticationGuard, UserManagementGuard] },
  { path: 'admin/user-management',component: UserManagementComponent, canActivate: [AdminGuard] },
  { path: 'admin/articles/details',component: ArticleManagementComponent, canActivate: [AdminGuard] },
  { path: 'articles/details/:id',component: ArticleDetailsComponent, canActivate: [AuthenticationGuard] },
  { path: 'articles/create',component: CreateArticleComponent, canActivate: [AuthenticationGuard] },
  { path: 'articles/details/:id/edit',component: EditArticleComponent, canActivate: [AuthenticationGuard] },
  { path: 'articles/details',component: ArticleListComponent, canActivate: [AuthenticationGuard] },
  { path: 'articles/details/:id/comments/:id/edit',component: EditCommentComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }