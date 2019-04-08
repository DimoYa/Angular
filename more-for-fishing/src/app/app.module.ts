import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/authentication/login/login.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HomeComponent } from './components/shared/home/home.component';
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


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    HomeComponent,
    ArticleComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
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
