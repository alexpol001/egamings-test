import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'egamings-ui-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() image: string;

  @Input() id: number;

  constructor() {}

  ngOnInit(): void {}
}
