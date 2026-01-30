export class Lexicon {
  constructor() {
    this.symbols = new Map();
  }

  register(symbol, payload) {
    this.symbols.set(symbol, payload);
  }

  get(symbol) {
    return this.symbols.get(symbol) || null;
  }
}
