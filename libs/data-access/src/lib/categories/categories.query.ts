import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ICategory } from '@egamings/models';
import { CategoriesStore, CategoriesState } from './categories.store';

@Injectable()
export class CategoriesQuery extends QueryEntity<CategoriesState, ICategory> {
  constructor(protected store: CategoriesStore) {
    super(store);
  }
}
