import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'egamings-ui-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  @Input() games: string[];

  constructor() {}

  ngOnInit(): void {}
}
