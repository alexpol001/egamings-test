import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { IGamesParams } from '@egamings/models';
import * as _ from 'lodash-es';
import { GamesParamsStore } from './params.store';

@Injectable()
export class GamesParamsQuery extends Query<IGamesParams> {
  constructor(protected store: GamesParamsStore) {
    super(store);
  }
}
