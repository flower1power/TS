interface IUserServise7 {
  users: number;
  getUsersInDatabase(): number;
}

class UserServise7 implements IUserServise7 {
  @Max(100)
  users: number;

  @Catch2({ rethrow: true })
  getUsersInDatabase(): number {
    throw new Error('Ошибка');
  }
}
function Max(max: number) {
  return (target: Object, propertyKey: string | symbol) => {
    let value: number;
    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя установить значение больше ${max}`);
      } else {
        value = newValue;
      }
    };
    const getter = function () {
      return value;
    };

    Object.defineProperty(target, propertyKey, { set: setter, get: getter });
  };
}

function Catch2({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
  return (
    target: Object,
    _: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const oldMetod = descriptor.value;

    descriptor.value = async (...args: any[]) => {
      try {
        return await oldMetod?.apply(target, args);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err);
          if (rethrow) {
            throw err;
          }
        }
      }
    };
  };
}

const userServise7 = new UserServise7();
userServise7.users = 1;
console.log(userServise7.users);
userServise7.users = 1000
console.log(userServise7.users);
