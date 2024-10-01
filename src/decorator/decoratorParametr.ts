import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

interface IUserServise9 {
  getUsersInDatabase(): number;
}

class UserServise9 implements IUserServise9 {
  private _users: number;

  getUsersInDatabase(): number {
    return this._users;
  }

  @Validate()
  setUsersInDatabase(@Positive() num: number): void {
    this._users = num;
  }
}

function Positive() {
  return (target: Object, propertyKey: string | symbol, indexParam: number) => {
    console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
    console.log(
      Reflect.getOwnMetadata('design:paramtypes', target, propertyKey),
    );
    console.log(
      Reflect.getOwnMetadata('design:returntype', target, propertyKey),
    );
    let existParams: number[] =
      Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
    existParams.push(indexParam);
    Reflect.defineMetadata(
      POSITIVE_METADATA_KEY,
      existParams,
      target,
      propertyKey,
    );
  };
}

function Validate() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
  ) => {
    let metod = descriptor.value;
    descriptor.value = function (...arg: any) {
      let positiveParams: number[] =
        Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) ||
        [];
      if (positiveParams) {
        for (let index of positiveParams) {
          if (arg[index] < 0) {
            throw new Error('Число должно быть больше 0');
          }
        }
      }
      return metod?.apply(this, arg);
    };
  };
}

const userServise9 = new UserServise9();
// userServise9.users = 20;
console.log(userServise9.setUsersInDatabase(10));
console.log(userServise9.setUsersInDatabase(-1));

