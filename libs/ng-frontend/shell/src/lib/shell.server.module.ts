import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { CoreServerModule } from '@egamings/shared/ng/data-access';

import { ServerStateInterceptor } from './interseptors/serverstate.interseptor';
import { ShellComponent } from './shell.component';
import { ShellModule } from './shell.module';

@NgModule({
  imports: [
    CoreServerModule,
    ServerModule,
    ServerTransferStateModule,
    ShellModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerStateInterceptor,
      multi: true,
    },
  ],
  bootstrap: [ShellComponent],
})
export class ShellServerModule {}
