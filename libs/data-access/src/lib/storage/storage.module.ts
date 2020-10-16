import { NgModule } from '@angular/core';
import { CookieStorageService } from './cookie-storage';
import { LocalStorageService } from './local-storage';
import { MemoryStorageService } from './memory-storage';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  providers: [
    MemoryStorageService,
    LocalStorageService,
    CookieStorageService,
    CookieService,
  ],
})
export class StorageModule {}
