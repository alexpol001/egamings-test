import { NgModule } from '@angular/core';
import { GamesOptionsQuery } from './options.query';
import { GamesOptionsService } from './options.service';
import { GamesOptionsStore } from './options.store';

@NgModule({
  providers: [GamesOptionsService, GamesOptionsQuery, GamesOptionsStore],
})
export class GamesOptionsModule {}
