import * as _ from 'lodash';
import { Injectable } from '@angular/core';

import { GamesOptions } from '@egamings/shared/ng/domain';

import { GamesPaginationService } from '../pagination/pagination.service';
import { GamesOptionsStore } from './options.store';

@Injectable()
export class GamesOptionsService {
  constructor(
    private store: GamesOptionsStore,
    private gamesPaginationService: GamesPaginationService
  ) {}

  update(params: Partial<GamesOptions>) {
    this.store.update(params);
    this.gamesPaginationService.reset();
  }
}
