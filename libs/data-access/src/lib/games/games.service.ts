import { Injectable } from '@angular/core';

import { ICategory, IGame } from '@egamings/models';
import { GamesStore } from './games.store';
import { ApiDataQuery } from '../api-data/api-data.query';
import { MerchantsQuery } from '../merchants';
import { CategoriesQuery } from '../categories';

@Injectable()
export class GamesService {
  constructor(
    private apiDataQuery: ApiDataQuery,
    private merchantsQuery: MerchantsQuery,
    private categoriesQuery: CategoriesQuery,
    private gamesStore: GamesStore
  ) {}

  getGames() {
    const apiGames = this.apiDataQuery.getValue().games;

    let games: IGame[] = [];
    for (let game of apiGames) {
      games.push({
        id: game.ID,
        categories: (() => {
          const categories: ICategory[] = [];
          for (let categoryId of game.CategoryID) {
            const category = this.categoriesQuery.getEntity(categoryId);
            if (category) {
              categories.push(category);
            }
          }
          return categories;
        })(),
        merchant: this.merchantsQuery.getEntity(game.MerchantID),
        name: game.Name['en'],
        image: game.ImageFullPath,
      });
    }
    this.gamesStore.set(games);
  }
}
