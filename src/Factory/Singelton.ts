class MyMap {
  private static instance: MyMap;

  map: Map<number, string> = new Map();

  private constructor() {}

  clean() {
    this.map = new Map();
  }

  public static get(): MyMap {
    if (!MyMap.instance) {
      MyMap.instance = new MyMap();
    }

    return MyMap.instance;
  }
}

class Servise1 {
  addMap(key: number, value: string) {
    const myMap = MyMap.get();
    myMap.map.set(key, value);
  }
}

class Servise2 {
  getKey(key: number) {
    const myMap = MyMap.get();
    console.log(myMap.map.get(key));
    myMap.clean();
    console.log(myMap.map.get(key));
  }
}

new Servise1().addMap(1, 'READY');
new Servise2().getKey(1);
