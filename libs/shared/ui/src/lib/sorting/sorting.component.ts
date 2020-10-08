import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { debounce } from 'helpful-decorators';

@Component({
  selector: 'egamings-ui-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SortingComponent implements OnInit {
  @Input() sort: Sort;
  @Input() sortFavorite: boolean;

  @Output() sortEvent: EventEmitter<Sort> = new EventEmitter();

  @Output() sortFavoriteEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  @debounce(500)
  onSort(sort: Sort) {
    this.sortEvent.emit(sort);
  }

  @debounce(500)
  onFavoriteToggle(sort: boolean) {
    this.sortFavoriteEvent.emit(sort);
  }
}
