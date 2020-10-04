import { Component, OnInit } from '@angular/core';
import { GamesQuery } from '@egamings/data-access';

@Component({
  selector: 'egamings-main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games = this.gamesQuery.selectAll();

  constructor(private gamesQuery: GamesQuery) {}

  ngOnInit(): void {}
}
