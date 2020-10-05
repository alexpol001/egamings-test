import { Injectable } from '@angular/core';

import { IMerchant } from '@egamings/models';
import { MerchantsStore } from './merchants.store';
import { ApiDataQuery } from '../api-data/api-data.query';
import * as _ from 'lodash-es';

@Injectable()
export class MerchantsService {
  constructor(
    private apiDataQuery: ApiDataQuery,
    private merchantsStore: MerchantsStore
  ) {}

  getMerchants() {
    const apiMerchants = _.values(this.apiDataQuery.getValue().merchants);

    let merchants: IMerchant[] = [];

    for (let merchant of apiMerchants) {
      merchants.push({
        id: merchant.ID,
        name: merchant.Name,
      });
    }
    this.merchantsStore.set(merchants);
  }
}
