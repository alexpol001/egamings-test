import { Injectable } from '@angular/core';
import { MemoryStorage } from './memory-storage';
import { StorageService } from '../storage.types';

@Injectable()
export class MemoryStorageService extends StorageService {
  constructor() {
    super(new MemoryStorage());
  }
}
