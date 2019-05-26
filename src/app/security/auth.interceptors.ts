import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from './login/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);

    if (loginService.isLoggedIn()) {
      /* A requisição é imutavel, ou seja, não da para altera-la. Entao é necessario criar um clone para setar as informações */
      const authRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${loginService.user.accessToken}` } });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}