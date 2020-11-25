import { Injectable } from '@angular/core';
import {
  StoreConfig,
  EntityState,
  ActiveState,
  EntityStore,
} from '@datorama/akita';

import { Merchant } from '@egamings/shared/ng/domain';

export interface MerchantsState extends EntityState<Merchant>, ActiveState {}

@Injectable()
@StoreConfig({ name: 'merchants' })
export class MerchantsStore extends EntityStore<MerchantsState, Merchant> {
  constructor() {
    super();
  }
}
