class Payment4 {
  private date: Date = new Date();

  getDate(this: Payment4): Date {
    return this.date;
  }

  getDateArrow = () => {
    return this.date;
  };
}

const p = new Payment4();

const user21 = {
  id: 1,
  paymentDate: p.getDate.bind(p),
  getDateArrow: p.getDateArrow,
};

console.log(p.getDate());
console.log(user21.paymentDate());
console.log(user21.getDateArrow());

class PaymentPersistent extends Payment4 {
  save() {
    return super.getDate();
  }
}

console.log(new PaymentPersistent().save());
