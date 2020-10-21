import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  CoreModule,
  ThemeModule,
  ITheme,
  CookieStorageService
} from '@egamings/shared/data-access';

import {
  EgamingsMainComponent,
  EgamingsMainModule,
} from '@egamings/feature-main';
import { EgamingsShellComponent } from './egamings-shell.component';

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
  imports: [
    CommonModule,
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
        storage: CookieStorageService
      }
    }),
    EgamingsMainModule,
  ],
  declarations: [EgamingsShellComponent],
  exports: [EgamingsShellComponent],
})
export class EgamingsShellModule {}
