import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HandlerInterceptorService } from './interceptors/responseHandler.interceptor';

@NgModule({

    providers: [
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
    ]
})
export class CoreModule { }
