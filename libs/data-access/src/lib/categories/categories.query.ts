import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { ICategory } from '@egamings/models';
import { CategoriesStore, CategoriesState } from './categories.store';

@Injectable()
@QueryConfig({
  sortBy: 'name',
  sortByOrder: Order.ASC,
})
export class CategoriesQuery extends QueryEntity<CategoriesState, ICategory> {
  constructor(protected store: CategoriesStore) {
    super(store);
  }
}