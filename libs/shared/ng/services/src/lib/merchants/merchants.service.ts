import * as _ from 'lodash';
import { Injectable } from '@angular/core';

import { IApiMerchant, Merchant } from '@egamings/shared/domain';

import { MerchantsStore } from './merchants.store';

@Injectable()
export class MerchantsService {
  constructor(private merchantsStore: MerchantsStore) {}

  initMerchants(IApiMerchants: IApiMerchant[]) {
    const merchants: Merchant[] = [];

    for (const merchant of IApiMerchants) {
      merchants.push({
        id: merchant.ID,
        name: merchant.Name,
      });
    }
    this.merchantsStore.set(merchants);
  }
}
