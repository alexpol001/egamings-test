import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'egamings-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() total: number = 0;
  @Input() filtered: number = 0;

  @HostBinding('class') bg = '_primary';

  constructor() {}

  ngOnInit(): void {}
}
