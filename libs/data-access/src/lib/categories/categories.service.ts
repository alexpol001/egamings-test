import { Injectable } from '@angular/core';

import { ICategory } from '@egamings/models';
import { CategoriesStore } from './categories.store';
import { ApiDataQuery } from '../api-data/api-data.query';

@Injectable()
export class CategoriesService {
  constructor(
    private apiDataQuery: ApiDataQuery,
    private categoriesStore: CategoriesStore
  ) {}

  getCategories() {
    const apiCategories = this.apiDataQuery.getValue().categories;

    let categories: ICategory[] = [
      {
        id: -1,
        name: 'Favorites',
      },
    ];
    for (let category of apiCategories) {
      categories.push({
        id: category.ID,
        name: category.Name['en'],
      });
    }
    this.categoriesStore.set(categories);
  }
}
