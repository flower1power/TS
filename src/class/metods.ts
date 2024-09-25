enum EPaymentStatus {
  Holded,
  Processed,
  Reversed,
}

class Payment1 {
  id: number;
  status: EPaymentStatus;
  createdAt: Date;
  uodatedAt: Date;

  constructor(id: number) {
    this.id = id;
    this.createdAt = new Date();
    this.status = EPaymentStatus.Holded;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholedPayment(): void {
    if (this.status === EPaymentStatus.Processed) {
      throw new Error('Платеж не может быть возвращен');
    }
    this.status = EPaymentStatus.Reversed;
    this.uodatedAt = new Date();
  }
}

const payment1 = new Payment1(1);
const time = payment1.getPaymentLifeTime();
payment1.unholedPayment();
