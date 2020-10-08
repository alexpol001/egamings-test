import * as _ from 'lodash-es';
import { Component, Input, OnInit } from '@angular/core';

import { IGame } from '@egamings/shared/models';

@Component({
  selector: 'egamings-ui-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit {
  @Input() set game(game: IGame) {
    if (game) {
      this.categories = _.join(
        game.categories?.map((category) => category.name),
        ', '
      );
      this._game = game;
    }
  }
  get game() {
    return this._game;
  }
  private _game: IGame;

  categories: string;

  constructor() {}

  ngOnInit(): void {}
}
