import { IThemeOpts } from './theme-opts.model';
import { LocalStorageService } from '../storage/local-storage';

export const THEME_DEFAULT_OPTS: IThemeOpts = {
  themeStorage: {
    storage: LocalStorageService,
    key: 'egamings-theme',
  },
};
