import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { IGamesFilter, IGamesParams } from '@egamings/models';

import {
  CategoriesQuery,
  GamesPaginationQuery,
  GamesPaginationService,
  GamesParamsQuery,
  GamesParamsService,
  MerchantsQuery,
} from '@egamings/data-access';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'egamings-main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories$ = this.categoriesQuery.selectAll();
  merchants$ = this.merchantsQuery.selectAll();

  games$ = this.gamesPaginationQuery.getPaginatedGames();

  pageSizeOptions = [10, 25, 50, 100];

  length$: Observable<number>;
  pageIndex$: Observable<number>;
  pageSize$: Observable<number>;

  sort$: Observable<Sort>;

  search$: Observable<string>;
  selectedCategories$: Observable<number[]>;
  selectedMerchants$: Observable<number[]>;

  constructor(
    private gamesPaginationQuery: GamesPaginationQuery,
    private gamesPaginationService: GamesPaginationService,
    private gamesParamsService: GamesParamsService,
    private gamesParamsQuery: GamesParamsQuery,
    private categoriesQuery: CategoriesQuery,
    private merchantsQuery: MerchantsQuery
  ) {}

  ngOnInit(): void {
    const pagination = this.gamesPaginationQuery.select();

    this.pageIndex$ = pagination.pipe(
      map((pagination) => pagination.pageIndex)
    );

    this.pageSize$ = pagination.pipe(map((pagination) => pagination.pageSize));

    this.length$ = this.gamesParamsService.getParamedGames().pipe(
      map((games) => {
        return games.length;
      })
    );

    const params = this.gamesParamsQuery.select();

    this.sort$ = params.pipe(map((params) => params.sort));
    this.search$ = params.pipe(map((params) => params.filters?.search));
    this.selectedCategories$ = params.pipe(
      map((params) => params.filters?.categories)
    );
    this.selectedMerchants$ = params.pipe(
      map((params) => params.filters?.merchants)
    );
  }

  onSort(sort: Sort) {
    this.updateParams({ sort });
  }

  onFilters(filters: IGamesFilter) {
    this.updateParams({ filters });
  }

  onPage(page: PageEvent) {
    this.gamesPaginationService.update({
      pageIndex: page.pageIndex,
      pageSize: page.pageSize,
    });
  }

  private updateParams(params: Partial<IGamesParams>) {
    this.gamesParamsService.update(params);
  }
}
