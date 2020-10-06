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
            games = this.sortGames(games, params.sort);
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
    return game.name.toLowerCase().includes(name?.toLowerCase());
  }

  private filterCategories(game: IGame, categoryIds: number[]) {
    if (categoryIds?.length) {
      for (let categoryId of categoryIds) {
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

  private sortGames(games: IGame[], sort: Sort) {
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
