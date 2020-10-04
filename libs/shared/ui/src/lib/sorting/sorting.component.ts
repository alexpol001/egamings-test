import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'egamings-ui-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SortingComponent implements OnInit {
  @Input() categories: string[];

  constructor() {}

  ngOnInit(): void {}
}
