import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { IGamesOptions } from '@egamings/shared/models';
import * as _ from 'lodash-es';
import { map } from 'rxjs/operators';
import { GamesOptionsStore } from './options.store';

@Injectable()
export class GamesOptionsQuery extends Query<IGamesOptions> {
  constructor(protected store: GamesOptionsStore) {
    super(store);
  }

  sort$ = this.select().pipe(map((options) => options.sort));

  sortFavorite$ = this.select().pipe(map((options) => options.sortFavorite));

  filterSearch$ = this.select().pipe(map((options) => options.filters?.search));

  filterCategories$ = this.select().pipe(
    map((options) => options.filters?.categories)
  );

  filterMerchants$ = this.select().pipe(
    map((options) => options.filters?.merchants)
  );
}
