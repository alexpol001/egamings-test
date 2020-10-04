import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'egamings-ui-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
  @Input() categories: string[];

  constructor() {}

  ngOnInit(): void {}
}
