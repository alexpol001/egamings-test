import { Injectable, Optional, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Observable } from 'rxjs';

@Injectable()
export class CookieInterceptor implements HttpInterceptor {
  constructor(@Optional() @Inject(REQUEST) private httpRequest) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // If optional request is provided, we are server side
    if (this.httpRequest) {
      req = req.clone({
        setHeaders: { Cookie: this.httpRequest.headers.cookie },
      });
    }
    return next.handle(req);
  }
}
