import { Injectable } from '@angular/core';

import { IGamesPagination } from '@egamings/shared/models';

import { GamesPaginationStore } from './pagination.store';

@Injectable()
export class GamesPaginationService {
  constructor(private store: GamesPaginationStore) {}

  update(params: Partial<IGamesPagination>) {
    this.store.update(params);
  }

  reset() {
    this.store.update({ pageIndex: 0 });
  }
}
