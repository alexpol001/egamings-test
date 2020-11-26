import { NgModule } from '@angular/core';
import { CookieModule } from 'ngx-cookie';
import { CookieStorageService } from './cookie-storage/cookie-storage.service';
import { LocalStorageService } from './local-storage/local-storage.service';
import { MemoryStorageService } from './memory-storage/memory-storage.service';

@NgModule({
  imports: [CookieModule.forRoot()],
  providers: [MemoryStorageService, LocalStorageService, CookieStorageService],
})
export class StorageModule {}
