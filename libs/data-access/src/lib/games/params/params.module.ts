import { NgModule } from '@angular/core';
import { GamesParamsQuery } from './params.query';
import { GamesParamsService } from './params.service';
import { GamesParamsStore } from './params.store';

@NgModule({
  providers: [GamesParamsService, GamesParamsQuery, GamesParamsStore],
})
export class GamesParamsModule {}
