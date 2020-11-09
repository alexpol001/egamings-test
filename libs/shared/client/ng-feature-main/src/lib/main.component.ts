import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { GamesQuery, ThemeQuery, ThemeService } from '@egamings/shared/client/ng-data-access';

@Component({
  selector: 'egamings-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class EgamingsMainComponent implements OnInit {
  total$ = this.gamesQuery.selectCount();

  filtered$ = this.gamesQuery.filteredGamesCount$;

  isDark$ = this.themeQuery
    .selectActiveId()
    .pipe(map((themeId) => themeId === this.darkThemeId));

  lightThemeId = 'light';

  darkThemeId = 'dark';

  constructor(
    private gamesQuery: GamesQuery,
    private themeService: ThemeService,
    private themeQuery: ThemeQuery
  ) {}

  ngOnInit(): void {}

  onToggleTheme(isDark: boolean) {
    this.themeService.setTheme(isDark ? this.darkThemeId : this.lightThemeId);
  }
}
