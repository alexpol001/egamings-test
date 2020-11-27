import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { IGame, GamesPagination } from '@egamings/shared/domain';

import * as _ from 'lodash';

import { GamesPaginationStore } from './pagination.store';

@Injectable()
export class GamesPaginationQuery extends Query<GamesPagination> {
  constructor(protected store: GamesPaginationStore) {
    super(store);
  }
}
