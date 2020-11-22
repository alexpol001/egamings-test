import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { GameCardComponent } from './game-card/game-card.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { LayoutsModule } from '../layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    LayoutsModule,
  ],
  declarations: [GameCardComponent, GameListComponent, GameScreenComponent],
  exports: [GameCardComponent, GameListComponent, GameScreenComponent],
})
export class GamesModule {}
