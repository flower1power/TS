/*
  Декоратор который добавляет свойство 
  createdAt в класс фиксируя дату создания.
*/
interface IUserServise4 {
  users: number;
  getUsersInDatabase(): number;
}

@CreatedAt
class UserServise4 implements IUserServise4 {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

//! если декоратор модифицирует интерфейс класса, то ножен новый тип 
function CreatedAt<T extends { new (...arg: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt = new Date();
  };
}

type CreatedAt = {
  createdAt: Date;
};

console.log((new UserServise4() as IUserServise4 & CreatedAt).createdAt);
