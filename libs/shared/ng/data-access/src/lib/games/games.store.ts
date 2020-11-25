import { Injectable } from '@angular/core';

import {
  StoreConfig,
  EntityState,
  EntityStore,
  MultiActiveState,
} from '@datorama/akita';

import { Game } from '@egamings/shared/ng/domain';

const initialState = { active: [] };

export interface GamesState extends EntityState<Game>, MultiActiveState {}

@Injectable()
@StoreConfig({ name: 'games' })
export class GamesStore extends EntityStore<GamesState, Game> {
  constructor() {
    super(initialState);
  }
}
