export class SyncManager {
  constructor() {
    this.pending = [];
  }

  enqueue(item) {
    this.pending.push(item);
  }
}
