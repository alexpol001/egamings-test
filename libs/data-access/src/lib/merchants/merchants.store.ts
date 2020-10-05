import { Injectable } from '@angular/core';
import {
  StoreConfig,
  EntityState,
  ActiveState,
  EntityStore,
} from '@datorama/akita';

import { IMerchant } from '@egamings/models';

export interface MerchantsState extends EntityState<IMerchant>, ActiveState {}

@Injectable()
@StoreConfig({ name: 'merchants' })
export class MerchantsStore extends EntityStore<MerchantsState, IMerchant> {
  constructor() {
    super();
  }
}
