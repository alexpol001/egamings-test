import { enableProdMode } from '@angular/core';

import { environment } from '@egamings/shared/client/ng-environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
