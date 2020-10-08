import { InjectionToken } from '@angular/core';

import { IDataAccessConfig } from './data-access.model';

export const API_URL_TOKEN = new InjectionToken<string>('api.url.token');

export const DATA_ACCESS_CONFIG_TOKEN = new InjectionToken<IDataAccessConfig>(
  'data-access.config.token'
);
