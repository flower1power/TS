type PaymentStatus2 = 'new' | 'paid';

class Payment2 {
  id: number;
  status: PaymentStatus2;

  constructor(id: number) {
    this.id = id;
  }

  pay(): void {
    this.status = 'paid';
  }
}

class PersistedPayment extends Payment2 {
  databaseID: number;
  paidAd: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {
    // сохраняет в базу
  }

  override pay(date?: Date): void {
    super.pay();
    if (date) {
      this.paidAd = date;
    }
  }
}

new PersistedPayment();

class User22 {
  name: string = 'user22';

  constructor() {
    console.log(this.name);
  }
}

class Admin2 extends User22 {
  // @ts-ignore
  name: string = 'Admin';

  constructor() {
    super();
    console.log(this.name);
  }
}

new Admin2();

class HttpError extends Error {
  conde: number;

  constructor(mess: string, code: number) {
    super(mess);
    this.conde = code ?? 500;
  }
}


// Плохой пример наследования
// class User23 {
//   name: string = 'user23';
//
//   constructor(name: string) {
//     this.name = name;
//   }
//
//   override toString() {
//     return this.map(u => u.name).join(' ');
//   }
// }
//
// class Users extends Array<User23> {
//   searchByName(name: string) {
//     return this.filter(user => user, name === name);
//   }
// }

// Норм пример

class User23 {
  name: string = 'user23';

  constructor(name: string) {
    this.name = name;
  }
}


class User24List {
  users: User23[];

  constructor(name: User23) {
    this.users.push(name);
  }
}

class Payment3 {
  data: Date;
}


class UserWithPayment2 {
  user: User23;
  payment: Payment3;

  constructor(user: User23, payment: Payment3) {
    this.user = user;
    this.payment = payment;
  }
}

//? используем наследование если в одной доменной области
//* не надо наследоваться от массовых методах
