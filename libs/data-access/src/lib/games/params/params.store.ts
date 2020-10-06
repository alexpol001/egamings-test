import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { IGamesParams } from '@egamings/shared/models';

function createInitialState(): IGamesParams {
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
export class GamesParamsStore extends Store<IGamesParams> {
  constructor() {
    super(createInitialState());
  }
}
