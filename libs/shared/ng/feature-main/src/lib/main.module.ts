import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from '@egamings/shared/ng/data-access';
import {
  FilterModule,
  GamesModule,
  LayoutsModule,
  PaginatorModule,
  SortingModule,
} from '@egamings/shared/ng/ui';

import { environment } from '@egamings/shared/ng/environment';

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
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    CoreModule.forRoot({
      apiUrl: environment.apiUrl,
      pagination: {
        pageSize: 25,
        pageSizeOptions: [25, 50, 75, 100],
      },
    }),
    LayoutsModule,
    GamesModule,
    FilterModule,
    SortingModule,
    PaginatorModule,
  ],
  declarations: [EgamingsMainComponent, GameComponent, HomeComponent],
  exports: [EgamingsMainComponent],
})
export class EgamingsMainModule {}
