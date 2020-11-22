import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';

import {
  CookieStorageService,
  ThemeModule,
} from '@egamings/shared/ng/data-access';

import { THEMES } from '@egamings/shared/ng/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EgamingsMainModule } from '@egamings/shared/ng/feature-main';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    EgamingsMainModule,
    BrowserModule.withServerTransition({ appId: 'frontendApp' }),
    TransferHttpCacheModule,
    ThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'light',
      themeStorageOpts: {
        storageService: CookieStorageService,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
