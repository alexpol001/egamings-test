import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';
import { CookieService, CookieOptions } from 'ngx-cookie';


import { CookieStorage } from './cookie-storage';
import { AStorageService } from '../storage.model';
import { MemoryStorageService } from '../memory-storage/memory-storage.service';
// import { CookieOptions } from './cookie-storage.model';

@Injectable()
export class CookieStorageService extends AStorageService {
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
