import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from '@egamings/frontend/shell';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
