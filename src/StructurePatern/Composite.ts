abstract class DeliveryItem {
  items: DeliveryItem[] = [];

  addItem(item: DeliveryItem) {
    if (item) {
      this.items.push(item);
    }
    return;
  }

  getItemPrices(): number {
    return this.items.reduce(
      (acc: number, item: DeliveryItem) => (acc += item.getPrice()),
      0,
    );
  }

  abstract getPrice(): number;
}

export class DeliveryShop extends DeliveryItem {
  constructor(private deliveryFee: number) {
    super();
  }

  override getPrice(): number {
    return this.getItemPrices() + this.deliveryFee;
  }
}

export class Package extends DeliveryItem {
  override getPrice(): number {
    return this.getItemPrices();
  }
}

export class Product extends DeliveryItem {
  constructor(private price: number) {
    super();
  }

  override getPrice(): number {
    return this.price;
  }
}

const shop = new DeliveryShop(100);
shop.addItem(new Product(1000));

const pac1 = new Package();
pac1.addItem(new Product(200));
pac1.addItem(new Product(300));
shop.addItem(pac1);

const pac2 = new Package();
pac2.addItem(new Product(30));
shop.addItem(pac2);

console.log(shop.getPrice());
