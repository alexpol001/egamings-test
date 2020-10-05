import { Injectable } from '@angular/core';

import { IGamesPageParams } from '@egamings/models';
import { GamesPageStore } from './page.store';

@Injectable()
export class GamesPageService {
  constructor(private store: GamesPageStore) {}

  update(params: Partial<IGamesPageParams>) {
    this.store.update(params);
  }
}
