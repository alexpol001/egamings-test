import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'egamings-ui-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  constructor(private matPaginatorIntl: MatPaginatorIntl) {
    // this.matPaginatorIntl.itemsPerPageLabel = 'ItemsPerPageLabel';
  }

  ngOnInit(): void {}
}
