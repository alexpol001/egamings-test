import { Component, Input, OnInit } from '@angular/core';
import { IGame } from '@egamings/models';

@Component({
  selector: 'egamings-ui-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss'],
})
export class GameScreenComponent implements OnInit {
  @Input() game: IGame;

  constructor() {}

  ngOnInit(): void {}
}
