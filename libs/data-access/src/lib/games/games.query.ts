import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { map, mergeMap, tap } from 'rxjs/operators';
import { IGame, IGamesPageParams } from '@egamings/models';
import { GamesStore, GamesState } from './games.store';
import { GamesPageQuery } from './page';

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
