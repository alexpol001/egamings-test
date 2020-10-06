import { Component, OnInit } from '@angular/core';
import { GamesQuery } from '@egamings/data-access';
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
    private gamesQuery: GamesQuery
  ) {}

  ngOnInit(): void {
    this.total$ = this.gamesQuery
      .selectAll()
      .pipe(map((games) => games?.length));

    this.filtered$ = this.gamesQuery
      .paramedGames$
      .pipe(map((games) => games?.length));
  }
}
