import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EgamingsShellComponent } from './egamings-shell.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EgamingsShellComponent],
  exports: [EgamingsShellComponent],
})
export class EgamingsShellModule {}
