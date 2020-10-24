import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from '@egamings/shared/data-access';
import {
  FilterModule,
  GamesModule,
  LayoutsModule,
  PaginatorModule,
  SortingModule,
} from '@egamings/shared/ui';

import { HomeComponent } from './home/home.component';
import { EgamingsMainComponent } from './egamings-main.component';
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
    CoreModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [EgamingsMainComponent, GameComponent, HomeComponent],
  exports: [EgamingsMainComponent],
})
export class EgamingsMainModule {}
