import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiModule } from '@egamings/shared/ui';

import { EgamingsMainComponent } from './egamings-main.component';

@NgModule({
  imports: [CommonModule, SharedUiModule],
  declarations: [EgamingsMainComponent],
  exports: [EgamingsMainComponent],
})
export class EgamingsMainModule {}
