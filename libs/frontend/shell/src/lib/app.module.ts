import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EgamingsMainComponent, EgamingsMainModule } from '@egamings/shared/feature-main';
import {
  CookieStorageService,
  CoreModule,
  ITheme,
  ThemeModule,
} from '@egamings/shared/data-access';

import { AppComponent } from './app.component';

const ROUTES: Routes = [
  {
    path: '',
    component: EgamingsMainComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const THEMES: ITheme[] = [
  {
    themeId: 'light',
    cssFile: 'light-theme.css',
  },
  {
    themeId: 'dark',
    cssClass: 'dark-theme',
    cssFile: 'dark-theme.css',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'frontendApp' }),
    // Cache for httpRequest data
    TransferHttpCacheModule,
    EgamingsMainModule,
    RouterModule.forRoot(ROUTES),
    CoreModule.forRoot({
      pagination: {
        pageSize: 25,
        pageSizeOptions: [25, 50, 75, 100],
      },
    }),
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
