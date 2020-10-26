import { Inject, Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { GamesPagination } from '@egamings/shared/common';

import { IPaginationConfig } from './pagination.model';
import { PAGINATION_CONFIG_TOKEN } from './pagination.token';

function createInitialState(config: IPaginationConfig): GamesPagination {
  return {
    pageIndex: 0,
    pageSize: config.pageSize,
    pageSizeOptions: config.pageSizeOptions,
  };
}

@Injectable()
@StoreConfig({ name: 'games-pagination' })
export class GamesPaginationStore extends Store<GamesPagination> {
  constructor(@Inject(PAGINATION_CONFIG_TOKEN) config: IPaginationConfig) {
    super(createInitialState(config));
  }
}
