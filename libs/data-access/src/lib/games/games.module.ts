import { NgModule } from '@angular/core';
import { GamesQuery } from './games.query';
import { GamesService } from './games.service';
import { GamesStore } from './games.store';
import { GamesPaginationModule } from './pagination/pagination.module';
import { GamesParamsModule } from './params/params.module';

@NgModule({
  imports: [GamesPaginationModule, GamesParamsModule],
  providers: [GamesService, GamesQuery, GamesStore],
})
export class GamesModule {}
