interface PaymentPersistent1 {
  id: number;
  sum: number;
  from: string;
  to: string;
}

//?Omit исключает то что указано из интерфейса
type Payment6 = Omit<PaymentPersistent1, 'id'>;

//?Pick получает тольк то что указано из интерфейса
type Payment6Requisits = Pick<PaymentPersistent1, 'from' | 'to'>;

//?Extract достает из юнион типов только те что являются вторым передаваеммым элементом
type ExtractEx = Extract<'from' | 'to' | Payment6 | PaymentPersistent1, string>;

//? Exclude исключает из юнион типов то что передано вторым параметром
type ExcludeEx = Exclude<'from' | 'to' | Payment6, string>;


