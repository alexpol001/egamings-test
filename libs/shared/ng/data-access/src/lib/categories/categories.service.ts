import { Injectable } from '@angular/core';

import { ApiCategory, Category } from '@egamings/shared/domain';

import { CategoriesStore } from './categories.store';

@Injectable()
export class CategoriesService {
  constructor(private categoriesStore: CategoriesStore) {}

  initCategories(apiCategories: ApiCategory[]) {
    const categories: Category[] = [];
    for (const category of apiCategories) {
      categories.push({
        id: category.ID,
        name: category.Name['en'],
      });
    }
    this.categoriesStore.set(categories);
  }
}
