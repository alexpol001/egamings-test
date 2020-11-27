import { Injectable } from '@angular/core';

import { IApiCategory, ICategory } from '@egamings/shared/domain';

import { CategoriesStore } from './categories.store';

@Injectable()
export class CategoriesService {
  constructor(private categoriesStore: CategoriesStore) {}

  initCategories(apiCategories: IApiCategory[]) {
    const categories: ICategory[] = [];
    for (const category of apiCategories) {
      categories.push({
        id: category.ID,
        name: category.Name['en'],
      });
    }
    this.categoriesStore.set(categories);
  }
}
