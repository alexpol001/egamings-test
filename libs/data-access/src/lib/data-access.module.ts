import * as _ from 'lodash';
import {
  Inject,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IApiData } from '@egamings/shared/models';

import { PAGINATION_CONFIG_TOKEN } from './games/pagination/pagination.token';
import { StorageModule } from './storage/storage.module';
import { MerchantsModule } from './merchants/merchants.module';
import { CategoriesModule } from './categories/categories.module';
import { GamesModule } from './games/games.module';
import { GamesService } from './games/games.service';
import { CategoriesService } from './categories/categories.service';
import { MerchantsService } from './merchants/merchants.service';
import { API_URL_TOKEN } from './data-access.tokens';
import { DATA_ACCESS_DEFAULT_CONFIG } from './data-access.common';
import { IDataAccessConfig } from './data-access.model';

@NgModule({
  imports: [
    HttpClientModule,
    StorageModule,
    MerchantsModule,
    CategoriesModule,
    GamesModule,
  ],
})
export class DataAccessModule {
  constructor(
    @Optional() @SkipSelf() parentModule: DataAccessModule,
    @Inject(API_URL_TOKEN) apiUrl: string,
    private httpClient: HttpClient,
    private gamesService: GamesService,
    private categoriesService: CategoriesService,
    private merchantsService: MerchantsService
  ) {
    if (parentModule) {
      throw new Error(
        'DataAccessModule is already loaded. Import it in the RootModule only!'
      );
    }

    this.httpClient.get(apiUrl).subscribe((apiData: IApiData) => {
      this.categoriesService.initCategories(apiData.categories);
      this.merchantsService.initMerchants(_.values(apiData.merchants));
      this.gamesService.initGames(apiData.games);
    });
  }

  static forRoot(
    config?: Partial<IDataAccessConfig>
  ): ModuleWithProviders<DataAccessModule> {
    config = _.merge(DATA_ACCESS_DEFAULT_CONFIG, config);

    return {
      ngModule: DataAccessModule,
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
