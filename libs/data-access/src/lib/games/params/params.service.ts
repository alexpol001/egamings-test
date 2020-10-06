import { Injectable } from '@angular/core';

import { IGamesParams } from '@egamings/models';
import * as _ from 'lodash-es';
import { GamesPaginationService } from '../pagination/pagination.service';
import { GamesParamsStore } from './params.store';

@Injectable()
export class GamesParamsService {
  constructor(
    private store: GamesParamsStore,
    private gamesPaginationService: GamesPaginationService
  ) {}

  update(params: Partial<IGamesParams>) {
    this.store.update(params);
    this.gamesPaginationService.reset();
  }
}
