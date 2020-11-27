import { Sort } from '@angular/material/sort';
import { ID } from '@datorama/akita';

import { ICategory } from './category.model';
import { IMerchant } from './merchant.model';

export interface IGame {
  id: ID;
  name: string;
  categories: ICategory[];
  merchant: IMerchant;
  image: string;
  step?: number;
}

export interface IGamesOptions {
  sort: Sort;
  sortFavorite: boolean;
  filters: IGamesFilters;
}

export interface IGamesFilters {
  search: string;
  categories: number[];
  merchants: number[];
}

export interface GamesPagination {
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[];
}
