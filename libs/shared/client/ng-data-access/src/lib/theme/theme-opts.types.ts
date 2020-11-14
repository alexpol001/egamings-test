import { Type } from '@angular/core';
import { StorageService } from '../storage/storage.types';
import { Theme } from './theme.model';

export interface ThemeStorageOpts {
  storage: Type<StorageService>;
  key: string;
}

export interface ThemeOpts {
  themeStorage?: Partial<ThemeStorageOpts>;
  themes?: Theme[];
  defaultThemeId?: string;
}
