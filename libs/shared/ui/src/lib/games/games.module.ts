import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { GameCardComponent } from './game-card';
import { GameListComponent } from './game-list';
import { GameScreenComponent } from './game-screen';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    LayoutsModule,
  ],
  declarations: [GameCardComponent, GameListComponent, GameScreenComponent],
  exports: [GameCardComponent, GameListComponent, GameScreenComponent],
})
export class GamesModule {}
