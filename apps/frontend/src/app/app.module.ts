import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserCookiesModule } from '@ngx-utils/cookies/browser';

// import { CookieModule } from 'ngx-cookie';

// import { EgamingsShellComponent} from './app.component';
import {
  EgamingsShellComponent,
  EgamingsShellModule,
} from '@egamings/feature-shell';

@NgModule({
  // declarations: [EgamingsShellComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'frontendApp' }),
    EgamingsShellModule,
    // Cache for httpRequest data
    TransferHttpCacheModule,
    BrowserCookiesModule.forRoot(),
    // CookieModule.forRoot(),
  ],
  exports: [EgamingsShellModule],
  // exports: [EgamingsShellComponent],
  bootstrap: [EgamingsShellComponent],
})
export class AppModule {}
