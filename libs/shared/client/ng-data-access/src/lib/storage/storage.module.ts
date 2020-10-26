import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { CookieStorageService } from './cookie-storage';
import { LocalStorageService } from './local-storage';
import { MemoryStorageService } from './memory-storage';

@NgModule({
  imports: [
    CookieModule.forRoot(),
  ],
  providers: [
    MemoryStorageService,
    LocalStorageService,
    CookieStorageService,
  ],
})
export class StorageModule {}
