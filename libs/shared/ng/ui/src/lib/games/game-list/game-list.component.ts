import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ID } from '@datorama/akita';

import { Game } from '@egamings/shared/ng/domain';

import { StepEvent } from './game-list.types';

@Component({
  selector: 'egamings-ui-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  @Input() games: Game[] = [];

  @Input() favorites: ID[] = [];

  @Output() favoriteEvent: EventEmitter<ID> = new EventEmitter();

  @Output() stepEvent: EventEmitter<StepEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onFavorite(id: ID) {
    this.favoriteEvent.emit(id);
  }

  onStep(stepEvent: StepEvent) {
    this.stepEvent.emit(stepEvent);
  }

  isFavorite(gameId: ID) {
    return this.favorites?.length
      ? this.favorites.indexOf(gameId) != -1
      : false;
  }

  trackByFn(index, item) {
    return item.id;
  }
}
