interface ILogger {
  log(...args): void;
  error(...args): void;
}

//? Класс реализовывает конкретный Интерфейс
class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(args);
  }
  async error(...args: any[]): Promise<void> {
    console.log(args);
  }
}

interface IPayable {
  pay(pamentId: number): void;
  price?: number;
}

interface IDeletable {
  dalete(): void;
}

class User21 implements IPayable, IDeletable {
  dalete(): void {
    throw new Error("Method not implemented.");
  }
  pay(pamentId: number): void {
    ///
  }
  price?: number | undefined;
}
