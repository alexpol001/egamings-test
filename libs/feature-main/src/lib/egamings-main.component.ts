import { Component, OnInit } from '@angular/core';
import { GamesParamsQuery, GamesQuery } from '@egamings/data-access';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'egamings-main',
  templateUrl: './egamings-main.component.html',
  styleUrls: ['./egamings-main.component.scss'],
})
export class EgamingsMainComponent implements OnInit {
  total$: Observable<number>;

  filtered$: Observable<number>;

  constructor(
    private gamesQuery: GamesQuery,
    private gamesParamsQuery: GamesParamsQuery
  ) {}

  ngOnInit(): void {
    this.total$ = this.gamesQuery
      .selectAll()
      .pipe(map((games) => games?.length));

    this.filtered$ = this.gamesParamsQuery
      .getParamedGames()
      .pipe(map((games) => games?.length));
  }
}
