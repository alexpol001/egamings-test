import * as _ from 'lodash';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ThemeOpts } from './theme-opts.types';
import { THEME_DEFAULT_OPTS } from './theme-default-opts';
import { ThemeService } from './theme.service';
import { ThemeStore } from './theme.store';
import { ThemeQuery } from './theme.query';
import { THEME_OPTS_TOKEN } from './theme-opts.token';
import { StorageService } from '../storage/storage.types';

@NgModule()
export class ThemeModule {
  static forRoot(
    opts?: Partial<ThemeOpts>
  ): ModuleWithProviders<ThemeModule> {
    const themeOpts = _.merge(THEME_DEFAULT_OPTS, opts);

    return {
      ngModule: ThemeModule,
      providers: [
        ThemeStore,
        ThemeQuery,
        ThemeService,
        {
          provide: StorageService,
          useExisting: themeOpts.themeStorage.storage,
        },
        { provide: THEME_OPTS_TOKEN, useValue: themeOpts },
      ],
    };
  }

  constructor(private themeService: ThemeService) {}
}
