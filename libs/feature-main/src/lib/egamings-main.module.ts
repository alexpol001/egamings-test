import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataAccessModule } from '@egamings/data-access';
import { FilterModule, GamesModule, LayoutsModule } from '@egamings/shared/ui';

import { EgamingsMainComponent } from './egamings-main.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    GamesModule,
    FilterModule,
    DataAccessModule,
  ],
  declarations: [EgamingsMainComponent],
  exports: [EgamingsMainComponent],
})
export class EgamingsMainModule {}
