import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { IGame, IGamesPagination } from '@egamings/shared/common';

import * as _ from 'lodash';

import { GamesPaginationStore } from './pagination.store';

@Injectable()
export class GamesPaginationQuery extends Query<IGamesPagination> {
  constructor(protected store: GamesPaginationStore) {
    super(store);
  }
}
