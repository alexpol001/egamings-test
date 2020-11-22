import { enableProdMode } from '@angular/core';

import { environment } from '@egamings/ng-frontend/shell';

if (environment.production) {
  enableProdMode();
}

export { ShellServerModule } from '@egamings/ng-frontend/shell';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
