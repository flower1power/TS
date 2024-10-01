interface IUserServise6 {
  users: number;
  getUsersInDatabase(): number;
}

class UserServise6 implements IUserServise6 {
  users: number = 1000;

  @Catch({ rethrow: true })
  getUsersInDatabase(): number {
    throw new Error('Ошибка');
  }
}

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
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

console.log(new UserServise5().getUsersInDatabase());
