import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { IGamesFilters, IGamesOptions } from '@egamings/shared/models';

import {
  CategoriesQuery,
  GamesOptionsQuery,
  GamesPaginationQuery,
  GamesPaginationService,
  GamesOptionsService,
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

  length$ = this.gamesQuery.filteredGamesCount$;

  pageIndex$ = this.gamesPaginationQuery.select('pageIndex');
  pageSize$ = this.gamesPaginationQuery.select('pageSize');
  pageSizeOptions$ = this.gamesPaginationQuery.select('pageSizeOptions');

  sort$ = this.gamesOptionsQuery.select('sort');
  sortFavorite$ = this.gamesOptionsQuery.select('sortFavorite');

  filterSearch$ = this.gamesOptionsQuery.filterSearch$;
  filterCategories$ = this.gamesOptionsQuery.filterCategories$;
  filterMerchants$ = this.gamesOptionsQuery.filterMerchants$;

  favorites$ = this.gamesQuery.selectActiveId();

  constructor(
    private titleService: Title,
    private gamesQuery: GamesQuery,
    private gamesService: GamesService,
    private gamesPaginationQuery: GamesPaginationQuery,
    private gamesPaginationService: GamesPaginationService,
    private gamesOptionsService: GamesOptionsService,
    private gamesOptionsQuery: GamesOptionsQuery,
    private categoriesQuery: CategoriesQuery,
    private merchantsQuery: MerchantsQuery
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Egamings | Home');
  }

  onSort(sort: Sort) {
    this.updateParams({ sort });
  }

  onFavoriteSort(sortFavorite: boolean) {
    this.updateParams({ sortFavorite });
  }

  onFilters(filters: IGamesFilters) {
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

  private updateParams(params: Partial<IGamesOptions>) {
    this.gamesOptionsService.update(params);
  }
}
