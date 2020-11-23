import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  CookieStorageService,
  CoreModule,
  ThemeModule,
} from '@egamings/shared/ng/data-access';
import { environment, THEMES } from '@egamings/shared/ng/data';

import { ShellComponent } from './shell.component';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@egamings/shared/ng/feature-main').then(
        (m) => m.EgamingsMainModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' }),
    CoreModule.forRoot({
      apiUrl: environment.apiUrl,
      pagination: {
        pageSize: 25,
        pageSizeOptions: [25, 50, 75, 100],
      },
    }),
    ThemeModule.forRoot({
      themes: THEMES,
      themeStorageOpts: {
        storageService: CookieStorageService,
      },
      defaultThemeId: 'light',
    }),
  ],
})
export class ShellModule {}
