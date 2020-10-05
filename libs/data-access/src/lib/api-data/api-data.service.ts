import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IApiData } from '@egamings/models';
import { ApiDataStore } from './api-data.store';
import { GamesService } from '../games/games.service';
import { CategoriesService } from '../categories';
import { MerchantsService } from '../merchants';

@Injectable()
export class ApiDataService {
  constructor(
    private httpClient: HttpClient,
    private apiDataStore: ApiDataStore,
    private gamesService: GamesService,
    private categoriesService: CategoriesService,
    private merchantService: MerchantsService
  ) {}

  getData() {
    this.httpClient.get('/assets/api.json').subscribe((data: IApiData) => {
      console.log(data);
      this.apiDataStore.update(data);
      this.categoriesService.getCategories();
      this.merchantService.getMerchants();
      this.gamesService.getGames();
    });
  }
}
