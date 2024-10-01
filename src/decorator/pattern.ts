interface IUserServise {
  user: number;
  getUsersInDatabase(): number;
}

class UserServise implements IUserServise {
  user: number = 1000;

  getUsersInDatabase(): number {
    return this.user;
  }
}

function nullUser(obj: IUserServise) {
  obj.user = 0;
  return obj;
}

function logUser(obj: IUserServise) {
  console.log('Users: ' + obj.user);
  return obj;
}

console.log(new UserServise().getUsersInDatabase());
//? декораторы выполняются в обратном порядке
console.log(logUser(nullUser(new UserServise())).getUsersInDatabase());
console.log(nullUser(logUser(new UserServise())).getUsersInDatabase());
