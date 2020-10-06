import { Sort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';

import { ICategory } from './category';

import { IMerchant } from './merchant';
import { ID } from '@datorama/akita';

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
}
