import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { CoreServerModule } from '@egamings/shared/client/ng-data-access';

import { ServerStateInterceptor } from './interseptors/serverstate.interseptor';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    CoreServerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerStateInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
