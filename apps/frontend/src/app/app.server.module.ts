import { HttpClientModule, HTTP_INTERCEPTORS, XhrFactory } from '@angular/common/http';
import { Inject, Injectable, NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';
import { EgamingsShellComponent } from '@egamings/feature-shell';
// import { EgamingsShellComponent } from './app.component';
import { AppModule } from './app.module';
import { ServerStateInterceptor } from './serverstate.interseptor';
import { UniversalInterceptor } from './universal.interceptor';
// import { CookieInterceptor } from './cookie.interceptor';
// import * as xhr2 from 'xhr2';

// import { ServerCookiesModule } from '@egamings/shared/utils';
// import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

// class ServerXhr implements XhrFactory {
//   build(): XMLHttpRequest {
//     xhr2.XMLHttpRequest.prototype._restrictedHeaders = {};
//     return new xhr2.XMLHttpRequest();
//   }
// }

// @Injectable()
// export class RequestCookies {
//     constructor(@Inject(REQUEST) private request: Request) {}

//     get cookies() {
//         return !!this.request.headers['cookie'] ? this.request.headers['cookie'] : null;
//     }
// }

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    // HttpClientModule,
    // ServerCookiesModule.forRoot(),
    // CookieBackendModule.forRoot(),
  ],
  providers: [
    // { provide: XhrFactory, useClass: ServerXhr },
    // { provide: 'req', useClass: RequestCookies },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      multi: true, // <-- important (you can have many interceptors)
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerStateInterceptor,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CookieInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [EgamingsShellComponent],
})
export class AppServerModule {}
