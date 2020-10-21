import { InjectionToken } from '@angular/core';

import { ICoreConfig } from './core.types';

export const API_URL_TOKEN = new InjectionToken<string>('api.url.token');

export const CORE_CONFIG_TOKEN = new InjectionToken<ICoreConfig>(
  'core.config.token'
);
