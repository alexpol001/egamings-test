import { Type } from '@angular/core';
import { StorageService } from '../storage/storage.types';
import { Theme } from './theme.model';

export interface ThemeStorageOpts {
  storageService: Type<StorageService>;
  key: string;
}

export interface ThemeOpts {
  themeStorageOpts?: Partial<ThemeStorageOpts>;
  themes?: Theme[];
  defaultThemeId?: string;
}
