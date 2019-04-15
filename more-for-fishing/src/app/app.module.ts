import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/authentication/login/login.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { LandingComponent } from './components/shared/landing/landing.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { ArticleDetailsComponent } from './components/articles/article-details/article-details.component';
import { ArticleService } from './core/services/article.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './core/services/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HandlerInterceptorService } from './core/interceptors/responseHandler.interceptor';
import { FooterComponent } from './components/shared/footer/footer.component';
import { UserDetailsComponent } from './components/user-management/user-details/user-details.component';
import { CreateArticleComponent } from './components/articles/create-article/create-article.component';
import { ArticleUserComponent } from './components/articles/article-user/article-user.component';
import { EditArticleComponent } from './components/articles/edit-article/edit-article.component';
import { UpdateUserComponent } from './components/user-management/update-user/update-user.component';
import { ArticleListComponent } from './components/articles/article-list/article-list.component';
import { CreateCommentComponent } from './components/comments/create-comment/create-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    LandingComponent,
    ArticleComponent,
    ArticleDetailsComponent,
    FooterComponent,
    UserDetailsComponent,
    CreateArticleComponent,
    ArticleUserComponent,
    EditArticleComponent,
    UpdateUserComponent,
    ArticleListComponent,
    CreateCommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ArticleService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandlerInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
