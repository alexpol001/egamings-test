import { NgModule } from '@angular/core';
import { MerchantsQuery } from './merchants.query';
import { MerchantsService } from './merchants.service';
import { MerchantsStore } from './merchants.store';

@NgModule({
  providers: [MerchantsService, MerchantsQuery, MerchantsStore],
})
export class MerchantsModule {}
