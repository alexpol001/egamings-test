import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'egamings-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') bg = '_primary';

  constructor() {}

  ngOnInit(): void {}
}
