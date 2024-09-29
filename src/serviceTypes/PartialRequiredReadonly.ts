interface User27 {
  name: string;
  age?: number;
  email: string;
}

//? Partial готворит что все ключи теперь НЕ обязательны
type partial = Partial<User27>;
const p1: partial = {};

//? Required готворит что все ключи теперь  обязательны
type required = Required<User27>;

//? Readonly готворит что все ключи теперь только для чтения
type readonli = Readonly<User27>;

//? Можно комбинировать
type requiredAndReadonli = Required<Readonly<User27>>;
