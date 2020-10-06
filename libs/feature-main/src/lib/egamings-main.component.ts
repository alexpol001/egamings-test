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
  total$ = this.gamesQuery.selectCount();

  filtered$ = this.gamesQuery.filteredGamesCount$;

  constructor(private gamesQuery: GamesQuery) {}

  ngOnInit(): void {}
}
