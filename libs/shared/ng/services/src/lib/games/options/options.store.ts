import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { GamesOptions } from '@egamings/shared/ng/domain';

function createInitialState(): GamesOptions {
  return {
    sort: null,
    sortFavorite: false,
    filters: {
      search: '',
      categories: [],
      merchants: [],
    },
  };
}

@Injectable()
@StoreConfig({ name: 'games-params' })
export class GamesOptionsStore extends Store<GamesOptions> {
  constructor() {
    super(createInitialState());
  }
}
