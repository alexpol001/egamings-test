import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
// import { CookieService, CookieOptions } from 'ngx-cookie';
import { CookiesService, CookiesOptions } from '@ngx-utils/cookies';

import { CookieStorage } from './cookie-storage';
import { AStorageService } from '../storage.model';
import { MemoryStorageService } from '../memory-storage/memory-storage.service';
// import { CookieOptions } from './cookie-storage.model';

@Injectable()
export class CookieStorageService extends AStorageService {
  protected storage: CookieStorage;

  constructor(
    cookieService: CookiesService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    super(new CookieStorage(cookieService));
  }

  async getItem(key: string) {
    console.log(await this.getLength());
    return super.getItem(key);
  }

  async setItem(
    key: string,
    value: string,
    opts?: CookiesOptions
  ): Promise<void> {
    this.storage.setItem(key, value, opts);
  }
}
