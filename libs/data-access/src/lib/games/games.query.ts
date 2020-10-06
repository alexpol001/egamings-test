import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { IGame } from '@egamings/shared/models';
import { GamesStore, GamesState } from './games.store';

@Injectable()
@QueryConfig({
  sortBy: 'name',
  sortByOrder: Order.ASC,
})
export class GamesQuery extends QueryEntity<GamesState, IGame> {
  constructor(protected store: GamesStore) {
    super(store);
  }
}
