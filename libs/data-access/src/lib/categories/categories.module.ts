import { NgModule } from '@angular/core';
import { CategoriesQuery } from './categories.query';
import { CategoriesService } from './categories.service';
import { CategoriesStore } from './categories.store';

@NgModule({
  providers: [CategoriesService, CategoriesQuery, CategoriesStore],
})
export class CategoriesModule {}
