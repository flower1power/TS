class Vehicle {
  make: string; // public
  private damages: string[];
  private _model: string; // не доступен ни где только в своем классе
  protected run: number; // доступен в классе наследования
  #price: number;

  set model(m: string) {
    this._model = m;
  }

  get model(): string {
    return this._model;
  }

  isPriceEqual(v: Vehicle) {
    return this.#price === v.#price;
  }

  addDamage(damage: string): void {
    this.damages.push(damage);
  }
}

class EuroTruck extends Vehicle {
  setDamage() {
    //
  }

  setRun(km: number) {
    this.run = km / 0.62;
  }
}

new Vehicle().make = 'Toyota';
new Vehicle().addDamage('Boom');
