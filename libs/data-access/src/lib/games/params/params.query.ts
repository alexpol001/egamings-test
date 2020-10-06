import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Query } from '@datorama/akita';

import { IGame, IGamesFilter, IGamesParams } from '@egamings/models';
import * as _ from 'lodash-es';
import { map, mergeMap } from 'rxjs/operators';
import { GamesQuery } from '../games.query';
import { GamesParamsStore } from './params.store';

@Injectable()
export class GamesParamsQuery extends Query<IGamesParams> {
  constructor(
    protected store: GamesParamsStore,
    private gamesQuery: GamesQuery
  ) {
    super(store);
  }

  getParamedGames() {
    return this.select().pipe(
      mergeMap((params) => {
        return this.gamesQuery.selectAll().pipe(
          map((games) => {
            games = this.filterGames(games, params.filters);
            games = this.sortGames(games, params.sort, params.sortFavorite);
            return games;
          })
        );
      })
    );
  }

  private filterGames(games: IGame[], filters: IGamesFilter) {
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
        if (categoryId === -1 && this.gamesQuery.hasActive(game.id)) {
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
    return games.sort((a, b) => {
      if (sortFavorite) {
        const activeA = this.gamesQuery.hasActive(a.id);
        const activeB = this.gamesQuery.hasActive(b.id);

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
    });
  }
}
