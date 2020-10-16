import { CookieService } from 'ngx-cookie-service';
import { IStorage } from '../storage.model';
import { CookieOptions } from './cookie-storage.model';

export class CookieStorage implements IStorage {
  constructor(private cookieService: CookieService) {}

  async clear(): Promise<void> {
    this.cookieService.deleteAll();
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
    this.cookieService.delete(key);
  }
  async setItem(
    key: string,
    value: string,
    opts?: Partial<CookieOptions>
  ): Promise<void> {
    const { expires, path, domain, secure, sameSite } = opts || {};
    await this.cookieService.set(
      key,
      value,
      expires || null,
      path || null,
      domain || null,
      secure || null,
      sameSite || null
    );
  }
  async getLength(): Promise<number> {
    return Object.keys(this.cookieService.getAll()).length;
  }
}
