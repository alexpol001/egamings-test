import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { GamesQuery } from '@egamings/data-access';

@Component({
  selector: 'egamings-main',
  templateUrl: './egamings-main.component.html',
  styleUrls: ['./egamings-main.component.scss'],
})
export class EgamingsMainComponent implements OnInit {
  games = this.gamesQuery.selectAll();

  constructor(
    private gamesQuery: GamesQuery,
    private matPaginatorIntl: MatPaginatorIntl
  ) {}

  ngOnInit(): void {
    this.matPaginatorIntl.itemsPerPageLabel = 'ItemsPerPageLabel'
  }
}
