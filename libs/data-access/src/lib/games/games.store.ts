import { Injectable } from '@angular/core';
import {
  StoreConfig,
  EntityState,
  ActiveState,
  EntityStore,
} from '@datorama/akita';

import { IGame } from '@egamings/models';

export interface GamesState extends EntityState<IGame>, ActiveState {}

@Injectable()
@StoreConfig({ name: 'games' })
export class GamesStore extends EntityStore<GamesState, IGame> {
  constructor() {
    super();
  }
}
