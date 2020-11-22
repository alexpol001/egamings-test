import { Routes } from '@angular/router';

import { EgamingsMainComponent } from '@egamings/shared/ng/feature-main';
import { Theme } from '@egamings/shared/ng/data-access';

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

export const THEMES: Theme[] = [
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
