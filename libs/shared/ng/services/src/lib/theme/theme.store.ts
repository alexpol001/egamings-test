import { Injectable } from '@angular/core';

import {
  StoreConfig,
  EntityState,
  ActiveState,
  EntityStore,
} from '@datorama/akita';

import { ITheme } from '@egamings/shared/domain';

export interface ThemeState extends EntityState<ITheme>, ActiveState {}

@Injectable()
@StoreConfig({ name: 'theme', idKey: 'themeId' })
export class ThemeStore extends EntityStore<ThemeState, ITheme> {
  constructor() {
    super();
  }
}
