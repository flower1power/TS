type PaymentStatus2 = 'new' | 'paid';

class Payment2 {
  id: number;
  status: PaymentStatus2;

  constructor(id: number) {
    this.id = id;
  }

  pay(): void {
    this.status = 'paid';
  }
}

class PersistedPayment extends Payment2 {
  databaseID: number;
  paidAd: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {
    // сохраняет в базу
  }

  override pay(date?: Date): void {
    super.pay();
    if (date) {
      this.paidAd = date;
    }
  }
}

new PersistedPayment();
