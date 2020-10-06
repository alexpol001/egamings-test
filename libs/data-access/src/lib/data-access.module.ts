import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ApiDataService } from './api-data/api-data.service';
import { ApiDataQuery } from './api-data/api-data.query';
import { ApiDataStore } from './api-data/api-data.store';

import { GamesQuery } from './games/games.query';
import { GamesService } from './games/games.service';
import { GamesStore } from './games/games.store';

import { CategoriesQuery } from './categories/categories.query';
import { CategoriesService } from './categories/categories.service';
import { CategoriesStore } from './categories/categories.store';

import { MerchantsQuery } from './merchants/merchants.query';
import { MerchantsService } from './merchants/merchants.service';
import { MerchantsStore } from './merchants/merchants.store';

import { GamesParamsQuery } from './games/params/params.query';
import { GamesParamsService } from './games/params/params.service';
import { GamesParamsStore } from './games/params/params.store';
import { GamesPaginationQuery } from './games/pagination/pagination.query';
import { GamesPaginationService } from './games/pagination/pagination.service';
import { GamesPaginationStore } from './games/pagination/pagination.store';

import { LocalStorageService } from './storage/local-storage/local-storage.service';
import { MemoryStorageService } from './storage/memory-storage/memory-storage.service';

@NgModule({
  imports: [HttpClientModule],
})
export class DataAccessModule {
  constructor(
    @Optional() @SkipSelf() parentModule: DataAccessModule,
    private apiDataService: ApiDataService
  ) {
    if (parentModule) {
      throw new Error(
        'DataAccessModule is already loaded. Import it in the RootModule only!'
      );
    }

    this.apiDataService.getData();
  }

  static forRoot(): ModuleWithProviders<DataAccessModule> {
    return {
      ngModule: DataAccessModule,
      providers: [
        ApiDataQuery,
        ApiDataService,
        ApiDataStore,

        GamesQuery,
        GamesService,
        GamesStore,

        GamesParamsQuery,
        GamesParamsService,
        GamesParamsStore,

        GamesPaginationQuery,
        GamesPaginationService,
        GamesPaginationStore,

        CategoriesQuery,
        CategoriesService,
        CategoriesStore,

        MerchantsQuery,
        MerchantsService,
        MerchantsStore,

        LocalStorageService,
        MemoryStorageService,
      ],
    };
  }
}
