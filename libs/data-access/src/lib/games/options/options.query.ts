import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { IGamesOptions } from '@egamings/shared/models';
import * as _ from 'lodash-es';
import { GamesOptionsStore } from './options.store';

@Injectable()
export class GamesOptionsQuery extends Query<IGamesOptions> {
  constructor(protected store: GamesOptionsStore) {
    super(store);
  }
}
