import { NgModule } from '@angular/core';
import { LocalStorageService } from './local-storage';
import { MemoryStorageService } from './memory-storage';

@NgModule({
  providers: [MemoryStorageService, LocalStorageService],
})
export class StorageModule {}
