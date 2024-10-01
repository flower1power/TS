interface IUserServise3 {
  users: number;
  getUsersInDatabase(): number;
}

//? инициализация сверху вниз
//? выполнение снизу вверх
// @nullUser2
@setUsers3(2)
@log()
// @threeUserAdv
// @setUserAdv3(4)
class UserServise3 implements IUserServise3 {
  users: number;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function nullUser3(target: Function) {
  target.prototype.users = 0;
}

function setUsers3(users: number) {
  console.log('setUsers3 ИНИЦИАЛИЗАЦИЯ');
  return (target: Function) => {
    console.log('setUsers3 СТАРТ');
    target.prototype.users = users;
  };
}

function log() {
  console.log('log ИНИЦИАЛИЗАЦИЯ');

  return (target: Function) => {
    console.log('log СТАРТ');
    target
  };
}

function setUserAdv3(users: number) {
  return <T extends { new (...arg: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      users = users;
    };
  };
}

function threeUserAdv3<T extends { new (...arg: any[]): {} }>(constructor: T) {
  return class extends constructor {
    users = 3;
  };
}

console.log(new UserServise3().getUsersInDatabase());
