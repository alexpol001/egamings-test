import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'egamings-ui-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() categories: string[];

  constructor() {}

  ngOnInit(): void {}
}
