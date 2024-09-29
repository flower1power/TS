//? возвращяет тип Promise
type A = Awaited<Promise<string>>;
type A2 = Awaited<Promise<Promise<string>>>;

interface IMenu {
  name: string;
  url: string;
}

async function getMenu(): Promise<IMenu[]> {
  return [{ name: 'Analitics', url: 'analises' }];
}

type R = Awaited<ReturnType<typeof getMenu>>; //IMenu[]

async function getArray<T>(func: T): Promise<Awaited<T>[]> {
  return [await func];
}

//?  старая реализация - не использовать
async function getArray2<T>(func: T): Promise<T[]> {
  return [await func];
}
