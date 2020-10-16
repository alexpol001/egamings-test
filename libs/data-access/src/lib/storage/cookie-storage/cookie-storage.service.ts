import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { CookieStorage } from './cookie-storage';
import { AStorageService } from '../storage.model';
import { MemoryStorageService } from '../memory-storage/memory-storage.service';

@Injectable()
export class CookieStorageService extends AStorageService {
  constructor(
    private memoryStorageService: MemoryStorageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    super(
      isPlatformBrowser(platformId) ? new CookieStorage() : memoryStorageService
    );
  }
}
