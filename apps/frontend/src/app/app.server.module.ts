import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';
import { EgamingsShellComponent } from '@egamings/feature-shell';
// import { EgamingsShellComponent } from './app.component';
import { AppModule } from './app.module';
import { ServerStateInterceptor } from './serverstate.interseptor';
import { UniversalInterceptor } from './universal.interceptor';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ServerTransferStateModule,
  ],
  providers: [
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
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [EgamingsShellComponent],
})
export class AppServerModule {}
