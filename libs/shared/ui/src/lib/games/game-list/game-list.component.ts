import { Component, Input, OnInit } from '@angular/core';
import { IGame } from '@egamings/models';

@Component({
  selector: 'egamings-ui-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  @Input() games: IGame[];

  constructor() {}

  ngOnInit(): void {}
}
