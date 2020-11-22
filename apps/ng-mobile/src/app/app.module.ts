import { NgModule } from '@angular/core';

import { ThemeModule } from '@egamings/shared/ng/data-access';
import { CommonCoreModule, THEMES } from '@egamings/shared/ng/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonCoreModule,
    ThemeModule.forRoot({
      themes: THEMES,
      defaultThemeId: 'light',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
