import { IDBManager } from './IDBManager.js';

export class RecipeDB extends IDBManager {
  constructor() {
    super('scx_recipes', 1);
  }
}
