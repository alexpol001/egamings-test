import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CoreServerModule } from '@egamings/shared/ng/services';

import { ServerStateInterceptor } from './interseptors/serverstate.interseptor';

@NgModule({
  imports: [CoreServerModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerStateInterceptor,
      multi: true,
    },
  ],
  exports: [CoreServerModule],
})
export class ShellServerModule {}
