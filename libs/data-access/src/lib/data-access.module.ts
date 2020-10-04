import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GamesService } from './games';

@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class DataAccessModule {
  constructor(private gamesService: GamesService) {
    this.gamesService.getGames();
  }
}
