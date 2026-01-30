export class IDBManager {
  constructor(dbName = 'scx_foundry', version = 1) {
    this.dbName = dbName;
    this.version = version;
    this.db = null;
  }

  connect() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };
      request.onupgradeneeded = event => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('recipes')) {
          db.createObjectStore('recipes', { keyPath: 'id', autoIncrement: true });
        }
      };
    });
  }
}
