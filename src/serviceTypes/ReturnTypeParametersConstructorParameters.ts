class User28 {
  constructor(public id: number, public name: string) {}
}

function getData2(id: number): User28 {
  return new User28(id, 'Вася');
}

//? ReturnType показывает тип который возвращается из функции
type RT = ReturnType<typeof getData2>; //User28
type RT2 = ReturnType<() => void>; //void
type RT3 = ReturnType<<T>() => T>; //unknown
type RT4 = ReturnType<<T extends string>() => T>; //string

//? Возвращает кортеж типов параметров
type PT = Parameters<typeof getData2>[0];
// type first = PT[0];

//? Возвращает кортеж типов параметров конструктора
type CT = ConstructorParameters<typeof User28>; //[id: number, name: string]

type IT = InstanceType<typeof User28>; //User28
