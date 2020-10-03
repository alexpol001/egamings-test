import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IGame } from '@egamings/models';
import { GamesStore, GamesState } from './games.store';

@Injectable({ providedIn: 'root' })
export class GamesQuery extends QueryEntity<GamesState, IGame> {
  constructor(protected store: GamesStore) {
    super(store);
  }
}
