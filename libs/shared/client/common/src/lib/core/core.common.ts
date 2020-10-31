import { Routes } from '@angular/router';

import { EgamingsMainComponent } from '@egamings/shared/client/ng-feature-main';
import { ITheme } from '@egamings/shared/client/ng-data-access';

export const ROUTES: Routes = [
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
