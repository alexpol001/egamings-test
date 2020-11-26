import { Inject, Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { GamesPagination } from '@egamings/shared/ng/domain';

import { PaginationConfig } from './pagination.types';
import { PAGINATION_CONFIG_TOKEN } from './pagination.token';

function createInitialState(config: PaginationConfig): GamesPagination {
  return {
    pageIndex: 0,
    pageSize: config.pageSize,
    pageSizeOptions: config.pageSizeOptions,
  };
}

@Injectable()
@StoreConfig({ name: 'games-pagination' })
export class GamesPaginationStore extends Store<GamesPagination> {
  constructor(@Inject(PAGINATION_CONFIG_TOKEN) config: PaginationConfig) {
    super(createInitialState(config));
  }
}
