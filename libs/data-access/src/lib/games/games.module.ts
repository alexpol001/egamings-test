import { NgModule } from '@angular/core';
import { GamesQuery } from './games.query';
import { GamesService } from './games.service';
import { GamesStore } from './games.store';
import { GamesPaginationModule } from './pagination/pagination.module';
import { GamesOptionsModule } from './options/options.module';

@NgModule({
  imports: [GamesPaginationModule, GamesOptionsModule],
  providers: [GamesService, GamesQuery, GamesStore],
})
export class GamesModule {}
