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
import { tap, catchError } from 'rxjs/operators'
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
            .pipe(tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse
                    && request.url.endsWith('login')) {
                    this.successfulLogin(event['body']);
                }
            }, (err: any) => {
                switch (err.status) {
                    case 401:
                        this.router.navigate(['/login']);
                        break;
                    case 404:
                        this.router.navigate(['/not-found']);
                        break;
                    case 500:
                        this.router.navigate(['/server-error']);
                        break;
                }
            }
            ));

    }

    successfulLogin(data): void {
        this.authService.authtoken = data['_kmd']['authtoken'];
        this.authService.user = data['username'];
        localStorage.setItem('authtoken', data['_kmd']['authtoken']);
        localStorage.setItem('username', data['username']);
        this.router.navigate(['/home']);
    }

}