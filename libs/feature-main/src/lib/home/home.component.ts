import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import {
  CategoriesQuery,
  GamesPageQuery,
  GamesPageService,
  MerchantsQuery,
} from '@egamings/data-access';

@Component({
  selector: 'egamings-main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games$ = this.gamesPageQuery.getPage();
  categories$ = this.categoriesQuery.selectAll();
  merchants$ = this.merchantsQuery.selectAll();

  constructor(
    private gamesPageQuery: GamesPageQuery,
    private gamesPageService: GamesPageService,
    private categoriesQuery: CategoriesQuery,
    private merchantsQuery: MerchantsQuery
  ) {}

  ngOnInit(): void {}

  onSort(sort: Sort) {
    this.gamesPageService.update({ sort });
  }
}
