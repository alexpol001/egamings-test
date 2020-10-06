import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { IGame, IGamesPagination } from '@egamings/shared/models';

import * as _ from 'lodash-es';
import { map } from 'rxjs/operators';
import { GamesPaginationStore } from './pagination.store';

@Injectable()
export class GamesPaginationQuery extends Query<IGamesPagination> {
  constructor(protected store: GamesPaginationStore) {
    super(store);
  }

  pageIndex$ = this.select().pipe(map((pagination) => pagination.pageIndex));

  pageSize$ = this.select().pipe(map((pagination) => pagination.pageSize));
}
