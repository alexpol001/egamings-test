import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';

import { Merchant } from '@egamings/shared/ng/domain';

import { MerchantsStore, MerchantsState } from './merchants.store';

@Injectable()
@QueryConfig({
  sortBy: 'name',
  sortByOrder: Order.ASC,
})
export class MerchantsQuery extends QueryEntity<MerchantsState, Merchant> {
  constructor(protected store: MerchantsStore) {
    super(store);
  }
}
