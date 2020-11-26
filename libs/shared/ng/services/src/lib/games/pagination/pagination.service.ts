import { Injectable } from '@angular/core';

import { GamesPagination } from '@egamings/shared/domain';

import { GamesPaginationStore } from './pagination.store';

@Injectable()
export class GamesPaginationService {
  constructor(private store: GamesPaginationStore) {}

  update(params: Partial<GamesPagination>) {
    this.store.update(params);
  }

  reset() {
    this.store.update({ pageIndex: 0 });
  }
}
