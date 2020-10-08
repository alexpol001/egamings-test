import { Injectable } from '@angular/core';

import {
  StoreConfig,
  EntityState,
  ActiveState,
  EntityStore,
} from '@datorama/akita';

import { ICategory } from '@egamings/shared/models';

export interface CategoriesState extends EntityState<ICategory>, ActiveState {}

@Injectable()
@StoreConfig({ name: 'categories' })
export class CategoriesStore extends EntityStore<CategoriesState, ICategory> {
  constructor() {
    super();
  }
}
