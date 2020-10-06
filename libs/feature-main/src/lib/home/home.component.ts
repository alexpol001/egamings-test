import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { IGamesFilter, IGamesParams } from '@egamings/shared/models';

import {
  CategoriesQuery,
  GamesPaginationQuery,
  GamesPaginationService,
  GamesParamsQuery,
  GamesParamsService,
  GamesQuery,
  GamesService,
  MerchantsQuery,
} from '@egamings/data-access';

import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { ID } from '@datorama/akita';

@Component({
  selector: 'egamings-main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories$ = this.categoriesQuery.selectAll();
  merchants$ = this.merchantsQuery.selectAll();

  games$ = this.gamesQuery.paginatedGames$;

  pageSizeOptions = [25, 50, 75, 100];

  length$: Observable<number>;
  pageIndex$: Observable<number>;
  pageSize$: Observable<number>;

  sort$: Observable<Sort>;
  sortFavorite$: Observable<boolean>;

  search$: Observable<string>;
  selectedCategories$: Observable<ID[]>;
  selectedMerchants$: Observable<ID[]>;

  favorites$: Observable<ID[]>;

  constructor(
    private titleService: Title,
    private gamesQuery: GamesQuery,
    private gamesService: GamesService,
    private gamesPaginationQuery: GamesPaginationQuery,
    private gamesPaginationService: GamesPaginationService,
    private gamesParamsService: GamesParamsService,
    private gamesParamsQuery: GamesParamsQuery,
    private categoriesQuery: CategoriesQuery,
    private merchantsQuery: MerchantsQuery
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Egamings | Home');

    const pagination = this.gamesPaginationQuery.select();

    this.pageIndex$ = pagination.pipe(
      map((pagination) => pagination.pageIndex)
    );

    this.pageSize$ = pagination.pipe(map((pagination) => pagination.pageSize));

    this.length$ = this.gamesQuery.paramedGames$.pipe(
      map((games) => {
        return games.length;
      })
    );

    const params = this.gamesParamsQuery.select();

    this.sort$ = params.pipe(map((params) => params.sort));
    this.sortFavorite$ = params.pipe(map((params) => params.sortFavorite));

    this.search$ = params.pipe(map((params) => params.filters?.search));
    this.selectedCategories$ = params.pipe(
      map((params) => params.filters?.categories)
    );
    this.selectedMerchants$ = params.pipe(
      map((params) => params.filters?.merchants)
    );

    // this.favorites$ = this.gamesQuery.selectActiveId();

    this.favorites$ = this.gamesQuery.selectActiveId();
  }

  onSort(sort: Sort) {
    this.updateParams({ sort });
  }

  onFavoriteSort(sortFavorite: boolean) {
    this.updateParams({ sortFavorite });
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

  onFavorite(id: number) {
    this.gamesService.toggleFavorite(id);
  }

  onStep(stepEvent: { id: ID; step: number }) {
    const { id, step } = stepEvent;
    this.gamesService.setStep(id, step);
  }

  private updateParams(params: Partial<IGamesParams>) {
    this.gamesParamsService.update(params);
  }
}
