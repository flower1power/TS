interface IUserServise8 {
  getUsersInDatabase(): number;
}

class UserServise8 implements IUserServise8 {
  private _users: number;

  @LogAccessor()
  set users(num: number) {
    this._users = num;
  }

  get users() {
    return this._users;
  }

  getUsersInDatabase(): number {
    throw new Error('Ошибка');
  }
}

function LogAccessor() {
  return (
    target: Object,
    _: string | symbol,
    descriptor: PropertyDescriptor,
  ) => {
    const set = descriptor.set;
    descriptor.set = (...args: any) => {
      console.log(`Установили: ${args}`);
      set?.apply(target, args);
    };
  };
}

const userServise8 = new UserServise8();
userServise8.users = 20;
console.log(userServise8);
