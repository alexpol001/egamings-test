import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataAccessModule } from '@egamings/data-access';
import { SharedUiModule } from '@egamings/shared/ui';

import { EgamingsMainComponent } from './egamings-main.component';

@NgModule({
  imports: [CommonModule, SharedUiModule, DataAccessModule],
  declarations: [EgamingsMainComponent],
  exports: [EgamingsMainComponent],
})
export class EgamingsMainModule {}
