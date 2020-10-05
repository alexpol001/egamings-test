import { Injectable } from '@angular/core';

import { IGame } from '@egamings/models';
import { GamesStore } from './games.store';
import { ApiDataQuery } from '../api-data/api-data.query';

@Injectable()
export class GamesService {
  constructor(
    private apiDataQuery: ApiDataQuery,
    private gamesStore: GamesStore
  ) {}

  getGames() {
    const apiGames = this.apiDataQuery.getValue().games;

    let games: IGame[] = [];
    for (let game of apiGames) {
      games.push({
        id: game.ID,
        categoryId: game.CategoryID,
        merchantId: game.MerchantID,
        name: game.Name['en'],
        image: game.ImageFullPath,
      });
    }
    if (games?.length > 100) {
      games = games.slice(0, 100);
    }
    this.gamesStore.set(games);
  }
}
