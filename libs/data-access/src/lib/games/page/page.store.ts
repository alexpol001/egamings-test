import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { IGamesPageParams } from '@egamings/models';

export function createInitialState(): IGamesPageParams {
  return {
    sort: null,
    itemPerPage: 10,
    page: 1,
    filters: {
      name: '',
      categoryIds: [],
      merchantIds: [],
    },
  };
}

@Injectable()
@StoreConfig({ name: 'games-page-params' })
export class GamesPageStore extends Store<IGamesPageParams> {
  constructor() {
    super(createInitialState());
  }
}
