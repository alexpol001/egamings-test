import { Injectable } from '@angular/core';

import { IApiCategory, ICategory } from '@egamings/shared/models';

import { CategoriesStore } from './categories.store';

@Injectable()
export class CategoriesService {
  constructor(private categoriesStore: CategoriesStore) {}

  initCategories(apiCategories: IApiCategory[]) {
    let categories: ICategory[] = [];
    for (let category of apiCategories) {
      categories.push({
        id: category.ID,
        name: category.Name['en'],
      });
    }
    this.categoriesStore.set(categories);
  }
}
