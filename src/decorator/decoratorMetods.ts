interface IUserServise5 {
  users: number;
  getUsersInDatabase(): number;
}

class UserServise5 implements IUserServise3 {
  users: number = 1000;

  @Log5
  getUsersInDatabase(): number {
    throw new Error('Ошибка');
  }
}

function Log5(
  target: Object,
  propertyKey: string | symbol, // название метода
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  const oldValue = descriptor.value;
  descriptor.value = () => {
    console.log('NO ERROR');
  };
}

console.log(new UserServise5().getUsersInDatabase());
