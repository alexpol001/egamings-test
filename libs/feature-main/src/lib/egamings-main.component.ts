import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'egamings-main',
  templateUrl: './egamings-main.component.html',
  styleUrls: ['./egamings-main.component.scss'],
})
export class EgamingsMainComponent implements OnInit {
  games = [
    'https://static.egamings.com/games/betsoft/primal_hunt.jpg',
    'https://static.egamings.com/games/betsoft/dim_sum_prize.jpg',
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
