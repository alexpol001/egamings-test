import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'egamings-ui-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GameCardComponent implements OnInit {
  @Input() id: number;

  @Input() mechant: string;

  @Input() name: string;

  @Input() image: string;

  @Input() favorite: boolean;

  @Input() step: number;

  @Output() favoriteToggleEvent: EventEmitter<number> = new EventEmitter();

  @Output() stepChangeEvent: EventEmitter<number> = new EventEmitter();

  playHover: boolean;

  constructor() {}

  ngOnInit(): void {}

  playMouseenter() {
    this.playHover = true;
  }

  playMouseleave() {
    this.playHover = false;
  }

  onToggle() {
    this.favoriteToggleEvent.emit(this.id);
  }

  onStepChange(step: number) {
    this.stepChangeEvent.emit(step);
  }
}
