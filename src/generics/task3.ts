/*
 *Необходимо написать функцию сортировки любых
 *объектов, которые имеют id по убыванию и по возрастанию
 */

const data1 = [
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Надя' },
];

interface IEl {
  id: number;
}

function sort<T extends IEl>(data: T[], sort: 'ask' | 'desk' = 'ask'): T[] {
  const newData = [...data];

  return newData.sort((a, b) => {
    switch (sort) {
      case 'ask':
        return a.id - b.id;
      case 'desk':
        return b.id - a.id;
    }
  });
}

console.log(sort(data1, 'desk'));
console.log(sort(data1));
