import { Component, OnInit } from '@angular/core';
import {
  CategoriesQuery,
  GamesQuery,
  MerchantsQuery,
} from '@egamings/data-access';

@Component({
  selector: 'egamings-main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games$ = this.gamesQuery.selectAll();
  categories$ = this.categoriesQuery.selectAll();
  merchants$ = this.merchantsQuery.selectAll();

  constructor(
    private gamesQuery: GamesQuery,
    private categoriesQuery: CategoriesQuery,
    private merchantsQuery: MerchantsQuery
  ) {}

  ngOnInit(): void {}
}
