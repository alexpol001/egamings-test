import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'egamings-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() total: number = 0;
  @Input() filtered: number = 0;

  @HostBinding('class') bg = '_primary';

  @Output() toggleThemeEvent = new EventEmitter<boolean>();

  @Input() isDark = false;

  time = new Date().getMilliseconds();

  constructor() {}

  ngOnInit(): void {}

  onToggleTheme() {
    this.toggleThemeEvent.emit(!this.isDark);
  }
}
