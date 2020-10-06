import { Injectable } from '@angular/core';

import { ICategory, IGame } from '@egamings/models';
import { GamesStore } from './games.store';
import { ApiDataQuery } from '../api-data/api-data.query';
import { MerchantsQuery } from '../merchants';
import { CategoriesQuery } from '../categories';
import { ID } from '@datorama/akita';
import { GamesQuery } from './games.query';

import { LocalStorageService } from '../storage/local-storage/local-storage.service';

@Injectable()
export class GamesService {
  constructor(
    private store: GamesStore,
    private query: GamesQuery,
    private apiDataQuery: ApiDataQuery,
    private merchantsQuery: MerchantsQuery,
    private categoriesQuery: CategoriesQuery,
    private localStorageService: LocalStorageService
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
        step: 0,
      });
    }
    this.store.set(games);
    this.favoritesInit();
  }

  toggleFavorite(id: ID) {
    this.store.toggleActive([id]);
    this.localStorageService.setItem(
      'favorites',
      JSON.stringify(this.query.getActiveId())
    );
  }

  setStep(id: ID, step: number) {
    this.store.update(id, () => {
      return { step };
    });
  }

  private async favoritesInit() {
    const favorites = await this.localStorageService.getItem('favorites');
    if (favorites?.length) {
      this.store.setActive(JSON.parse(favorites));
    }
  }
}
