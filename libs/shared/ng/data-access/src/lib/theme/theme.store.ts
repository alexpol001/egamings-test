import { Injectable } from '@angular/core';

import {
  StoreConfig,
  EntityState,
  ActiveState,
  EntityStore,
} from '@datorama/akita';

import { Theme } from '@egamings/shared/domain';

export interface ThemeState extends EntityState<Theme>, ActiveState {}

@Injectable()
@StoreConfig({ name: 'theme', idKey: 'themeId' })
export class ThemeStore extends EntityStore<ThemeState, Theme> {
  constructor() {
    super();
  }
}
