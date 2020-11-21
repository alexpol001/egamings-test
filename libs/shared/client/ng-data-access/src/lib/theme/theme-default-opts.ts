import { ThemeOpts } from './theme-opts.types';
import { LocalStorageService } from '../storage/local-storage/local-storage.service';

export const THEME_DEFAULT_OPTS: ThemeOpts = {
  themeStorageOpts: {
    storageService: LocalStorageService,
    key: 'egamings-theme',
  },
};
