import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
//    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('Intercepted!', req);
        // const copiedReq = req.clone({headers: req.headers.append('', '')});
        // const copiedReq = req.clone({params: req.params.set('auth', this.authService.getToken())});
        return next.handle(req).do(
            event => {
                console.log('Logging interceptor', event);
            }
        );
    }
}
