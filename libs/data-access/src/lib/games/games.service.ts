import { Injectable } from '@angular/core';

import { IApiGame, ICategory, IGame } from '@egamings/shared/models';
import { GamesStore } from './games.store';
import { MerchantsQuery } from '../merchants/merchants.query';
import { CategoriesQuery } from '../categories/categories.query';
import { ID } from '@datorama/akita';
import { GamesQuery } from './games.query';

import { LocalStorageService } from '../storage/local-storage/local-storage.service';

@Injectable()
export class GamesService {
  constructor(
    private store: GamesStore,
    private query: GamesQuery,
    private merchantsQuery: MerchantsQuery,
    private categoriesQuery: CategoriesQuery,
    private localStorageService: LocalStorageService
  ) {}

  initGames(apiGames: IApiGame[]) {
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
