import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { GamesOptions } from '@egamings/shared/common';

import { GamesOptionsStore } from './options.store';

@Injectable()
export class GamesOptionsQuery extends Query<GamesOptions> {
  constructor(protected store: GamesOptionsStore) {
    super(store);
  }
}
