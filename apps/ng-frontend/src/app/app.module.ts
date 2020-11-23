import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellComponent, ShellModule } from '@egamings/ng-frontend/shell';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    BrowserModule.withServerTransition({ appId: 'frontendApp' }),
    ShellModule,
  ],
  bootstrap: [ShellComponent],
})
export class AppModule {}
