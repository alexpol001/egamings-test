import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CookieService, CookieOptions } from 'ngx-cookie';

import { CookieStorage } from './cookie-storage';
import { StorageService } from '../storage.types';

@Injectable()
export class CookieStorageService extends StorageService {
  protected readonly storage: CookieStorage;

  constructor(
    cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    super(new CookieStorage(cookieService));
  }

  async setItem(
    key: string,
    value: string,
    opts?: CookieOptions
  ): Promise<void> {
    this.storage.setItem(key, value, opts);
  }
}
