import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Query, sortByOptions } from '@datorama/akita';

import { IGame, IGamesPageParams } from '@egamings/models';
import * as _ from 'lodash-es';
import { map, mergeMap } from 'rxjs/operators';
import { GamesQuery } from '../games.query';
import { GamesPageStore } from './page.store';

@Injectable()
export class GamesPageQuery extends Query<IGamesPageParams> {
  constructor(protected store: GamesPageStore, private gamesQuery: GamesQuery) {
    super(store);
  }

  getPage() {
    return this.select().pipe(
      mergeMap((params) => {
        return this.gamesQuery.selectAll().pipe(
          map((games) => {
            games = this.getSortedGames(games, params.sort);

            if (games?.length > 100) {
              games = games.slice(0, 100);
            }
            return games;
          })
        );
      })
    );
  }

  private getSortedGames(games: IGame[], sort: Sort) {
    const dir = (() => {
      switch (sort?.direction) {
        case 'asc':
          return 'asc';
        case 'desc':
          return 'desc';
        default:
          return null;
      }
    })();

    if (dir) {
      const fieldName = (() => {
        const active = sort.active;
        switch (active) {
          case 'merchant':
            return 'merchant.name';
          default:
            return active;
        }
      })();

      return _.orderBy(games, fieldName, dir);
    }

    return games;
  }
}
