import { NgModule } from '@angular/core';

import { AppModule } from './app.module';

import {
  ServerModule,
  ServerTransferStateModule,
} from '@angular/platform-server';

import { ShellComponent, ShellServerModule } from '@egamings/ng-frontend/shell';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ShellServerModule,
  ],
  bootstrap: [ShellComponent],
})
export class AppServerModule {}
