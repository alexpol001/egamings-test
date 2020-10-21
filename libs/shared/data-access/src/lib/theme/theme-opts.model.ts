import { Type } from '@angular/core';
import { AStorageService } from '../storage/storage.model';
import { ITheme } from './theme.model';

export interface IThemeStorageOpts {
  storage: Type<AStorageService>;
  key: string;
}

export interface IThemeOpts {
  themeStorage?: Partial<IThemeStorageOpts>;
  themes?: ITheme[];
  defaultThemeId?: string;
}
