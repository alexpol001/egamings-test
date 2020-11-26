import * as _ from 'lodash';
import { Injectable } from '@angular/core';

import { ApiMerchant, Merchant } from '@egamings/shared/domain';

import { MerchantsStore } from './merchants.store';

@Injectable()
export class MerchantsService {
  constructor(private merchantsStore: MerchantsStore) {}

  initMerchants(apiMerchants: ApiMerchant[]) {
    const merchants: Merchant[] = [];

    for (const merchant of apiMerchants) {
      merchants.push({
        id: merchant.ID,
        name: merchant.Name,
      });
    }
    this.merchantsStore.set(merchants);
  }
}
