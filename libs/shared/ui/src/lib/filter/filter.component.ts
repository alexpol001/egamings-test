import { Component, Input, OnInit } from '@angular/core';
import { IMerchant, ICategory } from '@egamings/models';

@Component({
  selector: 'egamings-ui-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() categories: ICategory[];
  @Input() merchants: IMerchant[];

  constructor() {}

  ngOnInit(): void {}
}
