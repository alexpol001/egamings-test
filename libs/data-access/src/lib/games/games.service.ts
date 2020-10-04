import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { IGame } from '@egamings/models';
import { GamesStore } from './games.store';

@Injectable({ providedIn: 'root' })
export class GamesService {
  constructor(private gamesStore: GamesStore, private httpClient: HttpClient) {}

  getGames() {
    this.httpClient
      .get('/assets/api.json')
      .pipe(
        map((apiData) => {
          let games: IGame[] = [];
          for (let game of apiData['games']) {
            games.push({
              id: game['ID'],
              categoryId: game['CategoryID'],
              merchantId: game['MerchantID'],
              image: game['ImageFullPath'],
            });
          }
          if (games?.length > 100) {
            games = games.slice(0, 100);
          }
          return games;
        })
      )
      .subscribe((games: IGame[]) => {
        // console.log(games);
        this.gamesStore.add(games);
      });
  }
}
