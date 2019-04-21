import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
    providers: [
        AuthenticationService,
        UserService
    ], 
    exports: [
        RegisterComponent
    ]
})
export class AuthenticationModule { }