import { Sort } from '@angular/material/sort';
import { ID } from '@datorama/akita';

import { ICategory } from './category.model';
import { Merchant } from './merchant.model';

export interface Game {
  id: ID;
  name: string;
  categories: ICategory[];
  merchant: Merchant;
  image: string;
  step?: number;
}

export interface GamesOptions {
  sort: Sort;
  sortFavorite: boolean;
  filters: GamesFilters;
}

export interface GamesFilters {
  search: string;
  categories: number[];
  merchants: number[];
}

export interface GamesPagination {
  pageIndex: number;
  pageSize: number;
  pageSizeOptions: number[];
}
