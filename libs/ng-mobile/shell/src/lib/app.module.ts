import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThemeModule } from '@egamings/shared/client/ng-data-access';
import { CommonCoreModule, THEMES } from '@egamings/shared/client/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonCoreModule,
    ThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'light',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
