export class Session {
  constructor() {
    this.storageKey = 'scx_session';
  }

  save(session) {
    localStorage.setItem(this.storageKey, JSON.stringify(session));
  }

  load() {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : null;
  }
}
