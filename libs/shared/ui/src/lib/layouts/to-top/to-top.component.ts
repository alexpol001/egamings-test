import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'egamings-ui-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.scss'],
})
export class ToTopComponent implements OnInit {
  @Input() step = 0;

  @Output() stepEvent: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  up() {
    this.updateStep(this.step + 1);
  }

  down(event: MouseEvent) {
    event.preventDefault();
    this.updateStep(this.step - 1);
  }

  updateStep(step: number) {
    this.step = step;
    this.stepEvent.emit(step);
  }
}
