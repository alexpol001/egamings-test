import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { GameCardComponent } from './game-card';
import { GameListComponent } from './game-list';
import { GameScreenComponent } from './game-screen';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  declarations: [GameCardComponent, GameListComponent, GameScreenComponent],
  exports: [GameCardComponent, GameListComponent, GameScreenComponent],
})
export class GamesModule {}
