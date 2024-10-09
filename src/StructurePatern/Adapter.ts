class KVDatabase {
  private db: Map<string, string> = new Map();

  save(key: string, value: string): void {
    this.db.set(key, value);
  }
}

class PersistenDB {
  savePersisten(data: Object) {
    console.log(data);
  }
}

class PersistenDBAdapter extends KVDatabase {
  constructor(public database: PersistenDB) {
    super();
  }

  override save(key: string, value: string): void {
    this.database.savePersisten({ key, value });
  }
}

function run2(base: KVDatabase) {
  base.save('key', 'myValue');
}

run2(new PersistenDBAdapter(new PersistenDB()));
