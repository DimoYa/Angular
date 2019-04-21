import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UpdateUserComponent } from './components/user-management/update-user/update-user.component';
import { SharedModule } from './components/shared/shared.module';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { CoreModule } from './core/core.module';
import { UserManagementComponent } from './components/admin-panel/user-management/user-management.component';
import { ArticleManagementComponent } from './components/admin-panel/article-management/article-management.component';
import { UserDetailsComponent } from './components/user-management/user-details/user-details.component';
import { ArticleModule } from './components/articles/article.module';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UpdateUserComponent,
    UserManagementComponent,
    ArticleManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    SharedModule,
    AuthenticationModule,
    CoreModule,
    ArticleModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
