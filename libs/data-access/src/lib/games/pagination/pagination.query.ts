import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { IGame, IGamesPagination } from '@egamings/models';

import * as _ from 'lodash-es';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { GamesParamsQuery } from '../params';
import { GamesPaginationStore } from './pagination.store';

@Injectable()
export class GamesPaginationQuery extends Query<IGamesPagination> {
  constructor(
    protected store: GamesPaginationStore,
    private gamesParamsQuery: GamesParamsQuery
  ) {
    super(store);
  }

  getPaginatedGames(): Observable<IGame[]> {
    return this.select().pipe(
      mergeMap((pagination) => {
        return this.gamesParamsQuery.getParamedGames().pipe(
          map((games) => {
            const { pageIndex, pageSize } = pagination;
            const start = pageIndex * pageSize;
            return games.slice(start, start + pageSize);
          })
        );
      })
    );
  }
}
