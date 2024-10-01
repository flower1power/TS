function Uni(name: string): any {
  console.log(`Инициализация: ${name}`);
  return function () {
    console.log(`Вызов: ${name}`);
  };
}

@Uni('Класс')
class MyClass {
  @Uni('Своство')
  props?: any;

  @Uni('Своство static')
  static props2?: any;

  @Uni('Метод')
  method(@Uni('Параметр метода') _: any) {}

  @Uni('Метод static')
  static method2(@Uni('Параметр метода static') _: any) {}

  constructor(@Uni('Параметр конструктора') _: any) {}
}
