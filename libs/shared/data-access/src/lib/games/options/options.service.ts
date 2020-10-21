import * as _ from 'lodash';
import { Injectable } from '@angular/core';

import { IGamesOptions } from '@egamings/shared/models';

import { GamesPaginationService } from '../pagination/pagination.service';
import { GamesOptionsStore } from './options.store';

@Injectable()
export class GamesOptionsService {
  constructor(
    private store: GamesOptionsStore,
    private gamesPaginationService: GamesPaginationService
  ) {}

  update(params: Partial<IGamesOptions>) {
    this.store.update(params);
    this.gamesPaginationService.reset();
  }
}
