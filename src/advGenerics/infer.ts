function runTransaction(transaction: { fromTo: [string, string] }) {
  console.log(transaction);
}

const transaction: GetFirstArg<typeof runTransaction> = {
  fromTo: ['1', '2'],
};

runTransaction(transaction);

// берем любую функцию вытаскиваем тип первого аргумента и его передаем
type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never;
