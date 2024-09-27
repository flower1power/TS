type Constructor = new (...arg: any[]) => {};
type GConstructor<T = {}> = new (...arg: any[]) => T;

class List {
  constructor(public items: string[]) {}
}

class Accordion {
  isOpend: boolean;
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      return this.items[0];
    }
  };
}

class AccordionList {
  isOpend: boolean;
  constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList);
const res7 = new list(['first', 'second', 'last']);
console.log(res7.first());

//! В ДИСИАЙ подходе
//? смешивание из разных областей - смешивание классов