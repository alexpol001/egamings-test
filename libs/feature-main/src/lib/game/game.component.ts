import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesQuery } from '@egamings/data-access';
import { IGame } from '@egamings/shared/models';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'egamings-main-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  game$: Observable<IGame>;

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
