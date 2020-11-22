import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { DOCUMENT, isPlatformServer } from '@angular/common';

import { RendererService } from '@egamings/shared/ng/utils';

import { ThemeOpts } from './theme-opts.types';
import { THEME_OPTS_TOKEN } from './theme-opts.token';
import { ThemeStore } from './theme.store';
import { ThemeQuery } from './theme.query';
import { Theme } from '@egamings/shared/domain';
import { StorageService } from '../storage/storage.types';

@Injectable()
export class ThemeService {
  private head: HTMLHeadElement;
  private body: HTMLElement;
  private renderer = this.globalRenderer.renderer;
  private themeLinks: HTMLElement[] = [];

  constructor(
    private themeStore: ThemeStore,
    private themeQuery: ThemeQuery,
    private globalRenderer: RendererService,
    private storageService: StorageService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional() @Inject(THEME_OPTS_TOKEN) private opts?: ThemeOpts
  ) {
    this.head = this.document.head;
    this.body = this.document.body;

    const { themes, defaultThemeId } = this.opts;

    this.addThemes(themes, defaultThemeId);
  }

  async addThemes(themes: Theme[], defaultTheme?: string) {
    if (themes?.length) {
      this.themeStore.add(themes);

      const themeId = await this.storageService.getItem(
        this.opts.themeStorageOpts.key
      );

      if (!themeId) {
        await this.setTheme(defaultTheme ? defaultTheme : themes[0].themeId);
      } else {
        await this.setTheme(themeId);
      }
    }
  }

  async setTheme(themeId: string) {
    const entity = this.themeQuery.getEntity(themeId);
    const active = this.themeQuery.getActive();

    if (entity.cssFile) {
      await this.loadCss(entity.cssFile);
    }

    if (this.themeLinks?.length >= 2) {
      this.renderer.removeChild(this.head, this.themeLinks.shift());
    }

    this.themeStore.setActive(themeId);

    if (active) {
      if (active.cssClass) {
        this.renderer.removeClass(this.body, active.cssClass);
      }
    }

    if (entity.cssClass) {
      this.renderer.addClass(this.body, entity.cssClass);
    }

    this.setThemeToStorage(themeId);
  }

  private async setThemeToStorage(themeId) {
    await this.storageService.setItem(this.opts.themeStorageOpts.key, themeId);
  }

  private loadCss(filename: string): Promise<void> {
    return new Promise((resolve) => {
      const linkEl: HTMLElement = this.renderer.createElement('link');
      this.renderer.setAttribute(linkEl, 'rel', 'stylesheet');
      this.renderer.setAttribute(linkEl, 'type', 'text/css');
      this.renderer.setAttribute(linkEl, 'href', filename);
      this.renderer.setProperty(linkEl, 'onload', resolve);

      if (this.head) {
        this.renderer.appendChild(this.head, linkEl);
      }
      this.themeLinks = [...this.themeLinks, linkEl];

      if (isPlatformServer(this.platformId)) {
        resolve();
      }
    });
  }
}
