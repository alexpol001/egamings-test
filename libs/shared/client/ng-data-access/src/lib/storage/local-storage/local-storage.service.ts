import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { LocalStorage } from './local-storage';
import { StorageService } from '../storage.types';
import { MemoryStorageService } from '../memory-storage/memory-storage.service';

@Injectable()
export class LocalStorageService extends StorageService {
  constructor(
    private memoryStorageService: MemoryStorageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    super(
      isPlatformBrowser(platformId) ? new LocalStorage() : memoryStorageService
    );
  }
}
