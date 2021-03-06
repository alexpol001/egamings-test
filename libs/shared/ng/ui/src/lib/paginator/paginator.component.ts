import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { debounce } from 'helpful-decorators';

@Component({
  selector: 'egamings-ui-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() length: number;
  @Input() pageIndex: number;
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  @Output() pageEvent: EventEmitter<PageEvent> = new EventEmitter();

  ngOnInit(): void {}

  @debounce(500)
  onPage(event: PageEvent) {
    this.pageEvent.emit(event);
  }
}
