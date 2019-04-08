import {
    HttpResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


const appKey = 'kid_rJyhiXLYV';
const appSecret = '21b5781390524ab5900561984ee6b2c9';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService,
        private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpEvent<any>> {

        if (request.url.endsWith('login') || request.url.endsWith(appKey)) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                }
            })
        } else {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                }
            })
        }
        return next.handle(request)
    }
}