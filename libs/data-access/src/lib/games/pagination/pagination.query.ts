import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Query } from '@datorama/akita';

import { IGame, IGamesPagination } from '@egamings/models';

import * as _ from 'lodash-es';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { GamesParamsService } from '../params/params.service';
import { GamesPaginationStore } from './pagination.store';

@Injectable()
export class GamesPaginationQuery extends Query<IGamesPagination> {
  constructor(
    protected store: GamesPaginationStore,
    private gamesParamsService: GamesParamsService
  ) {
    super(store);
  }

  getPaginatedGames(): Observable<IGame[]> {
    return this.select().pipe(
      mergeMap((pagination) => {
        return this.gamesParamsService.getParamedGames().pipe(
          map((games) => {
            const { pageIndex, pageSize } = pagination;
            // console.log(pagination);
            const start = pageIndex * pageSize;
            return games.slice(start, start + pageSize);
          })
        );
      })
    );
  }
}
