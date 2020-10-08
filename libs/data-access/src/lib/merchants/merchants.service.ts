import * as _ from 'lodash-es';
import { Injectable } from '@angular/core';

import { IApiMerchant, IMerchant } from '@egamings/shared/models';

import { MerchantsStore } from './merchants.store';

@Injectable()
export class MerchantsService {
  constructor(private merchantsStore: MerchantsStore) {}

  initMerchants(apiMerchants: IApiMerchant[]) {
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
