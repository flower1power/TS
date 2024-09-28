//* Написать функцию получения нужных данных из обьекта

const user26 = {
  name: 'Viktor',
  age: 28,
  skills: ['TS', 'JS'],
};

const result1 = pickObjectKeys(user26, ['age', 'skills']);
/*
  {
    age: 28,
    skills: ['TS', 'JS'],
  }
*/

type TPickObjectKeys<T, K extends keyof T> = {
  [P in K]: T[P];
};

function pickObjectKeys<T extends Record<PropertyKey, any>, K extends keyof T>(
  user: T,
  keys: K[],
): TPickObjectKeys<T, K> {
  const newUser26 = {} as TPickObjectKeys<T, K>;
  for (const key of keys) {
    if (key in user) {
      newUser26[key] = user[key];
    }
  }

  return newUser26;
}

console.log(result1);

const result2 = pickObjectKeys(user26, ['age', 'name']);
