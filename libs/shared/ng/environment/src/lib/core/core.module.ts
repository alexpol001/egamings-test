import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from '@egamings/shared/ng/data-access';
import { EgamingsMainModule } from '@egamings/shared/ng/feature-main';

import { ROUTES } from './core.common';
import { environment } from '../environment';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    EgamingsMainModule,
    RouterModule.forRoot(ROUTES),
    CoreModule.forRoot({
      apiUrl: environment.apiUrl,
      pagination: {
        pageSize: 25,
        pageSizeOptions: [25, 50, 75, 100],
      },
    }),
  ],
  exports: [CommonModule, RouterModule],
})
export class CommonCoreModule {}
