import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';

import { IMerchant } from '@egamings/shared/models';

import { MerchantsStore, MerchantsState } from './merchants.store';

@Injectable()
@QueryConfig({
  sortBy: 'name',
  sortByOrder: Order.ASC,
})
export class MerchantsQuery extends QueryEntity<MerchantsState, IMerchant> {
  constructor(protected store: MerchantsStore) {
    super(store);
  }
}
