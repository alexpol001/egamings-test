import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule, ThemeModule } from '@egamings/shared/ng/data-access';
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
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    CoreModule.forRoot({
      apiUrl: environment.apiUrl,
      pagination: {
        pageSize: 25,
        pageSizeOptions: [25, 50, 75, 100],
      },
    }),
    ThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'light',
    }),
  ],
  bootstrap: [ShellComponent],
})
export class ShellModule {}
