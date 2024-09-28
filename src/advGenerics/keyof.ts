interface IUser3 {
  name: string;
  age: number;
}

type KeysOfUser = keyof IUser3;

const key: KeysOfUser = 'age'; // name/age

//? K является ключами обьекта T
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user22: IUser3 = {
  name: 'Вася',
  age: 30,
};

const userName = getValue(user22, 'name');
