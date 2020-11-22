import { Storage } from '../storage.types';
import { CookieService, CookieOptions } from 'ngx-cookie';

export class CookieStorage implements Storage {
  constructor(private cookieService: CookieService) {}

  async clear(): Promise<void> {
    this.cookieService.removeAll();
  }

  async getItem(key: string): Promise<string> {
    const item = this.cookieService.get(key);

    return item != null ? item : null;
  }

  async key(index: number): Promise<string> {
    const keys = Object.keys(this.cookieService.getAll());

    return index >= 0 && index < keys.length ? keys[index] : null;
  }

  async removeItem(key: string): Promise<void> {
    this.cookieService.remove(key);
  }
  async setItem(
    key: string,
    value: string,
    opts?: CookieOptions
  ): Promise<void> {
    await this.cookieService.put(key, value, opts);
  }
  async getLength(): Promise<number> {
    return Object.keys(this.cookieService.getAll()).length;
  }
}
