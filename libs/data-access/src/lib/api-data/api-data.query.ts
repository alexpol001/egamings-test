import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { IApiData } from '@egamings/models';

import { ApiDataStore } from './api-data.store';

@Injectable()
export class ApiDataQuery extends Query<IApiData> {
  constructor(protected store: ApiDataStore) {
    super(store);
  }
}
