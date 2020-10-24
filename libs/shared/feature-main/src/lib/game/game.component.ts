import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { GamesQuery } from '@egamings/shared/data-access';
import { Game } from '@egamings/shared/common';

@Component({
  selector: 'egamings-main-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  game$: Observable<Game>;

  constructor(
    private titleService: Title,
    private gamesQuery: GamesQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.game$ = this.route.params.pipe(
      mergeMap((params) => {
        return this.gamesQuery.selectEntity(params?.id).pipe(
          map((game) => {
            const title = game ? game.name : 'Not found';
            this.titleService.setTitle(`Egamings | ${title}`);
            return game;
          })
        );
      })
    );
  }
}
