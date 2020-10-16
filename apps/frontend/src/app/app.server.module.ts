import { HttpClientModule, HTTP_INTERCEPTORS, XhrFactory } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';
// import { CookieBackendModule } from 'ngx-cookie-backend';
import { EgamingsShellComponent } from '@egamings/feature-shell';
// import { EgamingsShellComponent } from './app.component';
import { AppModule } from './app.module';
import { ServerStateInterceptor } from './serverstate.interseptor';
import { UniversalInterceptor } from './universal.interceptor';
import { CookieInterceptor } from './cookie.interceptor';
import * as xhr2 from 'xhr2';

// import { ServerCookiesModule } from '@ngx-utils/cookies/server';

// class ServerXhr implements XhrFactory {
//   build(): XMLHttpRequest {
//     xhr2.XMLHttpRequest.prototype._restrictedHeaders = {};
//     return new xhr2.XMLHttpRequest();
//   }
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
