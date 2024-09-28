/*

  Необходимо написать функцию группировки, которая принимает массив объектов
  и его ключ, производит группировку по указанному ключу и возращает
  сгруппированный объект.

  [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
  ];

  При группироке по 'group'

  {
  '1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
  '2': [ { group: 2, name: 'c' } ]
  }
*/

interface Data {
  group: number;
  name: string;
}

const data2: Data[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

interface IGroupe<T> {
  [key: string]: T[];
  // '2': [ { group: 2, name: 'c' } ]
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(
  array: T[],
  key: keyof T,
): IGroupe<T> {
  return array.reduce<IGroupe<T>>((map: IGroupe<T>, item) => {
    const itemKey = item[key];
    let curEl = map[itemKey];
    if (Array.isArray(curEl)) {
      curEl.push(item);
    } else {
      curEl = [item];
    }
    map[itemKey] = curEl;

    return map;
  }, {});
}

const result = group<Data>(data2, 'group');
console.log(result);
