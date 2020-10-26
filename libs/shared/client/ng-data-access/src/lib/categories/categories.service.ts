import { Injectable } from '@angular/core';

import { ApiCategory, Category } from '@egamings/shared/common';

import { CategoriesStore } from './categories.store';

@Injectable()
export class CategoriesService {
  constructor(private categoriesStore: CategoriesStore) {}

  initCategories(apiCategories: ApiCategory[]) {
    let categories: Category[] = [];
    for (let category of apiCategories) {
      categories.push({
        id: category.ID,
        name: category.Name['en'],
      });
    }
    this.categoriesStore.set(categories);
  }
}
