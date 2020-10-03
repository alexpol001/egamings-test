import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  EgamingsMainComponent,
  EgamingsMainModule,
} from '@egamings/feature-main';

import { EgamingsShellComponent } from './egamings-shell.component';

const ROUTES: Routes = [
  {
    path: '',
    component: EgamingsMainComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES), EgamingsMainModule],
  declarations: [EgamingsShellComponent],
  exports: [EgamingsShellComponent],
})
export class EgamingsShellModule {}