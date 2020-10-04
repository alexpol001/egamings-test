import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataAccessModule } from '@egamings/data-access';
import {
  FilterModule,
  GamesModule,
  LayoutsModule,
  PaginatorModule,
  SortingModule,
} from '@egamings/shared/ui';

import { EgamingsMainComponent } from './egamings-main.component';
import { GameComponent } from './game/game.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  {
    path: '',
    component: EgamingsMainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: ':id',
        component: GameComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    GamesModule,
    FilterModule,
    SortingModule,
    PaginatorModule,
    DataAccessModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [EgamingsMainComponent, GameComponent, HomeComponent],
  exports: [EgamingsMainComponent],
})
export class EgamingsMainModule {}
