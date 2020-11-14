import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransferHttpCacheModule } from '@nguniversal/common';

import {
  CookieStorageService,
  ThemeModule,
} from '@egamings/shared/client/ng-data-access';

import { CommonCoreModule, THEMES } from '@egamings/shared/client/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonCoreModule,
    BrowserModule.withServerTransition({ appId: 'frontendApp' }),
    TransferHttpCacheModule,
    ThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'light',
      themeStorage: {
        storage: CookieStorageService,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}