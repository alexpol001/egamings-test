import * as _ from 'lodash';
import { Component, Input, OnInit } from '@angular/core';

import { Game } from '@egamings/shared/ng/domain';

@Component({
  selector: 'egamings-ui-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit {
  @Input() set game(game: Game) {
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
  private _game: Game;

  categories: string;

  constructor() {}

  ngOnInit(): void {}
}
