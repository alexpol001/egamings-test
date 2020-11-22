import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment, ShellModule } from '@egamings/ng-frontend/shell';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(ShellModule)
  .catch((err) => console.error(err));
