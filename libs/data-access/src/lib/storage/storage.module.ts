import { NgModule } from '@angular/core';
import { CookieStorageService } from './cookie-storage';
import { LocalStorageService } from './local-storage';
import { MemoryStorageService } from './memory-storage';

@NgModule({
  providers: [
    MemoryStorageService,
    LocalStorageService,
    CookieStorageService,
  ],
})
export class StorageModule {}
