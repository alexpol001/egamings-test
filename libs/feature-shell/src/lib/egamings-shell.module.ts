import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  EgamingsMainComponent,
  EgamingsMainModule,
} from '@egamings/feature-main';

import { EgamingsShellComponent } from './egamings-shell.component';
import { DataAccessModule } from '@egamings/data-access';

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
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    DataAccessModule.forRoot({
      pagination: {
        pageSize: 25,
        pageSizeOptions: [25, 50, 75, 100],
      },
    }),
    EgamingsMainModule,
  ],
  declarations: [EgamingsShellComponent],
  exports: [EgamingsShellComponent],
})
export class EgamingsShellModule {}
