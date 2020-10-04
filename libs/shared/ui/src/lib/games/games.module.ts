import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { GameComponent } from './game';
import { GameListComponent } from './game-list';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [GameComponent, GameListComponent],
  exports: [GameComponent, GameListComponent],
})
export class GamesModule {}
