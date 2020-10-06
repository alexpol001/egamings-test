import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'egamings-ui-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SortingComponent implements OnInit {
  @Input() categories: string[];
  @Input() sort: Sort;

  @Output() sortEvent: EventEmitter<Sort> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSort(sort: Sort) {
    this.sortEvent.emit(sort);
  }
}
