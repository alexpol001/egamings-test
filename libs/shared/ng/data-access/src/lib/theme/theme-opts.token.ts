import { InjectionToken } from '@angular/core';
import { ThemeOpts } from './theme-opts.types';

export const THEME_OPTS_TOKEN = new InjectionToken<ThemeOpts>('theme.opts');
