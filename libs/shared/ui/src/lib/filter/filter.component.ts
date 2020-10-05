import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMerchant, ICategory } from '@egamings/models';

@Component({
  selector: 'egamings-ui-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() categories: ICategory[];
  @Input() merchants: IMerchant[];

  @Output() changeEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChange(event) {
    console.log(event);
  }
}
