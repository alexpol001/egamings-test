import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@egamings/ui';

import { EgamingsMainComponent } from './egamings-main.component';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [EgamingsMainComponent],
  exports: [EgamingsMainComponent],
})
export class EgamingsMainModule {}
