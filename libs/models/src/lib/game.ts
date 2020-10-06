import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

import { ICategory } from './category';

import { IMerchant } from './merchant';

export interface IGame {
  id: number;
  name: string;
  categories: ICategory[];
  merchant: IMerchant;
  image: string;
}

export interface IGamesParams {
  sort: Sort;
  filters: IGamesFilter;
}

export interface IGamesFilter {
  search: string;
  categories: number[];
  merchants: number[];
}

export interface IGamesPagination {
  pageIndex: number;
  pageSize: number;
}
