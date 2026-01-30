import { IDBManager } from './IDBManager.js';

export class CacheDB extends IDBManager {
  constructor() {
    super('scx_cache', 1);
  }
}
