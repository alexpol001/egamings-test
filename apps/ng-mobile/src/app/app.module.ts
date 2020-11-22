import { NgModule } from '@angular/core';

import { ThemeModule } from '@egamings/shared/ng/data-access';
import { THEMES } from '@egamings/shared/ng/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EgamingsMainModule } from '@egamings/shared/ng/feature-main';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    EgamingsMainModule,
    ThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'light',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
