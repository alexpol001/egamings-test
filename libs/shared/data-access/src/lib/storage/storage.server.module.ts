import { NgModule } from '@angular/core';
import { CookieBackendModule } from 'ngx-cookie-backend';

@NgModule({
  imports: [CookieBackendModule.forRoot()],
})
export class StorageServerModule {}
