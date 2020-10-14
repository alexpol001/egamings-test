import * as _ from 'lodash';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { IThemeOpts } from './theme-opts.model';
import { THEME_DEFAULT_OPTS } from './theme-default-opts';
import { ThemeService } from './theme.service';
import { ThemeStore } from './theme.store';
import { ThemeQuery } from './theme.query';
import { THEME_OPTS_TOKEN } from './theme-opts.token';
import { AStorageService } from '../storage/storage.model';

@NgModule()
export class DataAccessThemeModule {
  static forRoot(
    opts?: IThemeOpts
  ): ModuleWithProviders<DataAccessThemeModule> {
    const themeOpts = _.merge(THEME_DEFAULT_OPTS, opts);

    return {
      ngModule: DataAccessThemeModule,
      providers: [
        ThemeStore,
        ThemeQuery,
        ThemeService,
        {
          provide: AStorageService,
          useExisting: themeOpts.themeStorage.storage,
        },
        { provide: THEME_OPTS_TOKEN, useValue: themeOpts },
      ],
    };
  }

  constructor(private themeService: ThemeService) {}
}
