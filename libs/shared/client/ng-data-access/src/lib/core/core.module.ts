import * as _ from 'lodash';
import {
  Inject,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiData } from '@egamings/shared/common';

import { PAGINATION_CONFIG_TOKEN } from '../games/pagination/pagination.token';
import { StorageModule } from '../storage/storage.module';
import { MerchantsModule } from '../merchants/merchants.module';
import { CategoriesModule } from '../categories/categories.module';
import { GamesModule } from '../games/games.module';
import { GamesService } from '../games/games.service';
import { CategoriesService } from '../categories/categories.service';
import { MerchantsService } from '../merchants/merchants.service';
import { API_URL_TOKEN } from './core.tokens';
import { CORE_DEFAULT_CONFIG } from './core.common';
import { ICoreConfig } from './core.types';

@NgModule({
  imports: [
    HttpClientModule,
    StorageModule,
    MerchantsModule,
    CategoriesModule,
    GamesModule,
  ],
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    @Inject(API_URL_TOKEN) apiUrl: string,
    private httpClient: HttpClient,
    private gamesService: GamesService,
    private categoriesService: CategoriesService,
    private merchantsService: MerchantsService
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the RootModule only!'
      );
    }

    this.httpClient.get(apiUrl).subscribe((apiData: ApiData) => {
      this.categoriesService.initCategories(apiData.categories);
      this.merchantsService.initMerchants(_.values(apiData.merchants));
      this.gamesService.initGames(apiData.games);
    });
  }

  static forRoot(
    config?: Partial<ICoreConfig>
  ): ModuleWithProviders<CoreModule> {
    config = _.merge(CORE_DEFAULT_CONFIG, config);

    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: API_URL_TOKEN,
          useValue: config.apiUrl,
        },
        {
          provide: PAGINATION_CONFIG_TOKEN,
          useValue: config.pagination,
        },
      ],
    };
  }
}
