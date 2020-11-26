import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { Game, GamesPagination } from '@egamings/shared/ng/domain';

import * as _ from 'lodash';

import { GamesPaginationStore } from './pagination.store';

@Injectable()
export class GamesPaginationQuery extends Query<GamesPagination> {
  constructor(protected store: GamesPaginationStore) {
    super(store);
  }
}
