import * as _ from 'lodash';
import { Injectable } from '@angular/core';

import { ApiMerchant, Merchant } from '@egamings/shared/common';

import { MerchantsStore } from './merchants.store';

@Injectable()
export class MerchantsService {
  constructor(private merchantsStore: MerchantsStore) {}

  initMerchants(apiMerchants: ApiMerchant[]) {
    let merchants: Merchant[] = [];

    for (let merchant of apiMerchants) {
      merchants.push({
        id: merchant.ID,
        name: merchant.Name,
      });
    }
    this.merchantsStore.set(merchants);
  }
}
