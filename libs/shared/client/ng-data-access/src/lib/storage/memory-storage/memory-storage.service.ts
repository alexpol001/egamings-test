import { Injectable } from '@angular/core';
import { MemoryStorage } from './memory-storage';
import { AStorageService } from '../storage.model';

@Injectable()
export class MemoryStorageService extends AStorageService {
  constructor() {
    super(new MemoryStorage());
  }
}
