import * as _ from 'lodash-es';

import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { map, mergeMap } from 'rxjs/operators';

import { IGame, IGamesFilters } from '@egamings/shared/models';

import { GamesStore, GamesState } from './games.store';
import { GamesPaginationQuery } from './pagination';
import { GamesOptionsQuery } from './options/options.query';

@Injectable()
@QueryConfig({
  sortBy: 'name',
  sortByOrder: Order.ASC,
})
export class GamesQuery extends QueryEntity<GamesState, IGame> {
  constructor(
    protected store: GamesStore,
    private gamesOptionsQuery: GamesOptionsQuery,
    private gamesPaginationQuery: GamesPaginationQuery
  ) {
    super(store);
  }

  filteredGames$ = this.gamesOptionsQuery.select().pipe(
    mergeMap((params) => {
      return this.selectAll().pipe(
        map((games) => {
          games = this.filterGames(games, params.filters);
          games = this.sortGames(games, params.sort, params.sortFavorite);
          return games;
        })
      );
    })
  );

  paginatedGames$ = this.gamesPaginationQuery.select().pipe(
    mergeMap((pagination) => {
      return this.filteredGames$.pipe(
        map((games) => {
          const { pageIndex, pageSize } = pagination;
          const start = pageIndex * pageSize;
          return games.slice(start, start + pageSize);
        })
      );
    })
  );

  filteredGamesCount$ = this.filteredGames$.pipe(map((games) => games.length));

  private filterGames(games: IGame[], filters: IGamesFilters) {
    return games.filter((game) => {
      return (
        this.filterName(game, filters?.search) &&
        this.filterCategories(game, filters?.categories) &&
        this.filterMerchants(game, filters?.merchants)
      );
    });
  }

  private filterName(game: IGame, name: string) {
    return name ? game.name.toLowerCase().includes(name?.toLowerCase()) : true;
  }

  private filterCategories(game: IGame, categoryIds: number[]) {
    if (categoryIds?.length) {
      for (let categoryId of categoryIds) {
        if (categoryId === -1 && this.hasActive(game.id)) {
          return true;
        }
        for (let gameCategory of game.categories) {
          if (categoryId === gameCategory.id) {
            return true;
          }
        }
      }
      return false;
    }

    return true;
  }

  private filterMerchants(game: IGame, merchantIds: number[]) {
    if (merchantIds?.length) {
      for (let merchantId of merchantIds) {
        if (merchantId === game.merchant.id) {
          return true;
        }
      }
      return false;
    }

    return true;
  }

  private sortGames(games: IGame[], sort: Sort, sortFavorite: boolean) {
    return games?.length
      ? games.sort((a, b) => {
          if (sortFavorite) {
            const activeA = this.hasActive(a.id);
            const activeB = this.hasActive(b.id);

            if (activeA && !activeB) {
              return -1;
            }

            if (activeB && !activeA) {
              return 1;
            }
          }

          if (a.step > b.step) {
            return -1;
          } else if (a.step < b.step) {
            return 1;
          }

          let dir = sort?.direction;
          let active = sort?.active;
          let fieldA;
          let fieldB;

          if (dir) {
            fieldA = _.get(a, active);
            fieldB = _.get(b, active);
          } else {
            dir = 'asc';
            fieldA = a.name;
            fieldB = b.name;
          }

          if (typeof fieldA === 'string') {
            fieldA = fieldA.toLowerCase();
            fieldB = fieldB.toLowerCase();
          }

          if (fieldA < fieldB) {
            return dir === 'asc' ? -1 : 1;
          } else if (fieldA > fieldB) {
            return dir === 'asc' ? 1 : -1;
          }

          return 0;
        })
      : games;
  }
}
