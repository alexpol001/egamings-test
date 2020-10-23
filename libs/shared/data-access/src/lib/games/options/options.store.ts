import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { IGamesOptions } from '@egamings/shared/common';

function createInitialState(): IGamesOptions {
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
export class GamesOptionsStore extends Store<IGamesOptions> {
  constructor() {
    super(createInitialState());
  }
}
