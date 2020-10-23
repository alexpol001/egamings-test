import { Injectable } from '@angular/core';

import {
  StoreConfig,
  EntityState,
  EntityStore,
  MultiActiveState,
} from '@datorama/akita';

import { IGame } from '@egamings/shared/common';

const initialState = { active: [] };

export interface GamesState extends EntityState<IGame>, MultiActiveState {}

@Injectable()
@StoreConfig({ name: 'games' })
export class GamesStore extends EntityStore<GamesState, IGame> {
  constructor() {
    super(initialState);
  }
}
