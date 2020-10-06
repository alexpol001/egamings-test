import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';

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

  constructor(private matPaginatorIntl: MatPaginatorIntl) {
    // this.matPaginatorIntl.itemsPerPageLabel = 'ItemsPerPageLabel';
  }

  ngOnInit(): void {}

  onPage(event: PageEvent) {
    this.pageEvent.emit(event);
  }
}
