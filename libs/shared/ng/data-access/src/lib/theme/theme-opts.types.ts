import { Type } from '@angular/core';

import { Theme } from '@egamings/shared/ng/domain';

import { StorageService } from '../storage/storage.types';

export interface ThemeStorageOpts {
  storageService: Type<StorageService>;
  key: string;
}

export interface ThemeOpts {
  themeStorageOpts?: Partial<ThemeStorageOpts>;
  themes?: Theme[];
  defaultThemeId?: string;
}
