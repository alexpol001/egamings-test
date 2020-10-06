import { Injectable } from '@angular/core';
import { StoreConfig, Store } from '@datorama/akita';

import { IApiData } from '@egamings/shared/models';

export function createInitialState(): IApiData {
  return {
    categories: [],
    games: [],
    merchants: [],
  };
}

@Injectable()
@StoreConfig({ name: 'api-data' })
export class ApiDataStore extends Store<IApiData> {
  constructor() {
    super(createInitialState());
  }
}
