class User15 {
  name: string;
  age: number;

  // конструктор вызова
  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  //конструктор реализации
  constructor(ageOrName?: string | number, age?: number) {
    if (typeof ageOrName === 'string') {
      this.name = ageOrName;
    } else if (typeof ageOrName === 'number') {
      this.age = ageOrName;
    }

    if (typeof age === 'number') {
      this.age = age;
    }
  }
}

const user15 = new User15('Viktor');
const user16 = new User15();
const user17 = new User15(33);
const user18 = new User15('Viktor', 33);
