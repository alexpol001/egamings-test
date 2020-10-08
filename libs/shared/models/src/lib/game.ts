import { Sort } from '@angular/material/sort';
import { ID } from '@datorama/akita';

import { ICategory } from './category';
import { IMerchant } from './merchant';

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

export interface IGamesPagination {
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[];
}
