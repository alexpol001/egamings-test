import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { IGamesPagination } from '@egamings/shared/models';

function createInitialState(): IGamesPagination {
  return {
    pageIndex: 0,
    pageSize: 10,
  };
}

@Injectable()
@StoreConfig({ name: 'games-pagination' })
export class GamesPaginationStore extends Store<IGamesPagination> {
  constructor() {
    super(createInitialState());
  }
}
