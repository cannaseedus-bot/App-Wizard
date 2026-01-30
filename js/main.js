import { AuthService } from './app/auth/AuthService.js';
import { RecipeDB } from './app/database/RecipeDB.js';
import { Lexicon } from './app/core/Lexicon.js';
import { Factory } from './app/core/Factory.js';

class SCXFoundryApp {
  constructor() {
    this.auth = new AuthService();
    this.db = new RecipeDB();
    this.lexicon = new Lexicon();
    this.factory = new Factory({ lexicon: this.lexicon });
  }

  async init() {
    await this.db.connect();
    console.info('SCX Foundry scaffolding ready.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new SCXFoundryApp();
  app.init();
});
