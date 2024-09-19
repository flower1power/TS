interface User13 {
  name: string;
}

const user13 = {};

// assert -говорить что тут проверка и если не так, то выкидывает ошибку
function assertUser(obj: unknown): asserts obj is User13 {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return;
  }
  throw new Error('Не User13');
}

assertUser(user13);
user13.name = 'Vik';

type Payment = number | { sum: number }

// let payment: Payment = 10;
payment = {sum: 10};
