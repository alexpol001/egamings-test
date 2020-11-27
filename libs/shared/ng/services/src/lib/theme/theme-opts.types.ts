import { Type } from '@angular/core';

import { ITheme } from '@egamings/shared/domain';

import { StorageService } from '../storage/storage.types';

export interface ThemeStorageOpts {
  storageService: Type<StorageService>;
  key: string;
}

export interface ThemeOpts {
  themeStorageOpts?: Partial<ThemeStorageOpts>;
  themes?: ITheme[];
  defaultThemeId?: string;
}
