import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { IMerchant } from '@egamings/models';

import { MerchantsStore, MerchantsState } from './merchants.store';

@Injectable()
export class MerchantsQuery extends QueryEntity<MerchantsState, IMerchant> {
  constructor(protected store: MerchantsStore) {
    super(store);
  }
}
