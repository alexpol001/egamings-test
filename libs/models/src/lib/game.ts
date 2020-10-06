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
}

export interface IGamesParams {
  sort: Sort;
  sortFavorite: boolean;
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
