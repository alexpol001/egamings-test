import { NgModule } from '@angular/core';
import { StorageServerModule } from '../storage/storage.server.module';

@NgModule({
  imports: [StorageServerModule],
})
export class CoreServerModule {}
