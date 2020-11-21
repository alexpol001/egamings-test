import { Injectable } from '@angular/core';

import {
  StoreConfig,
  EntityState,
  ActiveState,
  EntityStore,
} from '@datorama/akita';

import { Category } from '@egamings/shared/domain';

export interface CategoriesState extends EntityState<Category>, ActiveState {}

@Injectable()
@StoreConfig({ name: 'categories' })
export class CategoriesStore extends EntityStore<CategoriesState, Category> {
  constructor() {
    super();
  }
}
