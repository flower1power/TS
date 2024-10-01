interface IUserServise2 {
  users: number;
  getUsersInDatabase(): number;
}

// @nullUser2
@threeUserAdv
class UserServise2 implements IUserServise2 {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function nullUser2(target: Function) {
  target.prototype.users = 0;
}

function threeUserAdv<T extends { new (...arg: any[]): {} }>(constructor: T) {
  return class extends constructor {
    users = 3;
  };
}

console.log(new UserServise2().getUsersInDatabase());
