import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';
import {
  EgamingsShellComponent,
  EgamingsShellModule,
} from '@egamings/feature-shell';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'frontendApp' }),
    EgamingsShellModule,
    // Cache for httpRequest data
    TransferHttpCacheModule
  ],
  exports: [EgamingsShellModule],
  bootstrap: [EgamingsShellComponent],
})
export class AppModule {}
