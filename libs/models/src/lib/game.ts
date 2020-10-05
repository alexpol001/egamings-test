import { Sort } from '@angular/material/sort';

import { IMerchant } from './merchant';

export interface IGame {
  id: number;
  name: string;
  categoryId: number[];
  merchant: IMerchant;
  image: string;
}

export interface IGamesPageParams {
  sort: Sort;
  itemPerPage: number;
  page: number;
  filters: IGamePageFilter;
}

export interface IGamePageFilter {
  name: string;
  categoryIds: number[];
  merchantIds: number[];
}
