import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {
  FilterModule,
  GamesModule,
  LayoutsModule,
  PaginatorModule,
  SortingModule,
} from '@egamings/shared/ng/ui';

import { HomeComponent } from './home/home.component';
import { EgamingsMainComponent } from './main.component';
import { GameComponent } from './game/game.component';

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
        path: 'game/:id',
        component: GameComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    LayoutsModule,
    GamesModule,
    FilterModule,
    SortingModule,
    PaginatorModule,
  ],
  declarations: [EgamingsMainComponent, GameComponent, HomeComponent],
})
export class EgamingsMainModule {}
