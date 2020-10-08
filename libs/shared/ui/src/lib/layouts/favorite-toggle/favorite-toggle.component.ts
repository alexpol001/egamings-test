import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'egamings-ui-favorite-toggle',
  templateUrl: './favorite-toggle.component.html',
  styleUrls: ['./favorite-toggle.component.scss'],
})
export class FavoriteToggleComponent implements OnInit {
  @Input() active: boolean;

  @Output() toggleEvent: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {}

  onToggle() {
    this.active = !this.active;
    this.toggleEvent.emit(this.active);
  }
}
