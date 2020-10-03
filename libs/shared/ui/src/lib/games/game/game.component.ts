import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'egamings-ui-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @Input() img: string;

  constructor() {}

  ngOnInit(): void {}
}
