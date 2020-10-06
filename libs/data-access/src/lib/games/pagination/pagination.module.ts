import { NgModule } from '@angular/core';
import { GamesPaginationQuery } from './pagination.query';
import { GamesPaginationService } from './pagination.service';
import { GamesPaginationStore } from './pagination.store';

@NgModule({
  providers: [
    GamesPaginationService,
    GamesPaginationQuery,
    GamesPaginationStore,
  ],
})
export class GamesPaginationModule {}
