/*
Необходимо сделать корзину (Cart) на сайте,
которая имеет список товаров (Product), добавленных в корзину
и параметры доставки (Delivery). Для Cart реализовать методы:
- добавить товар в корзину
- удалить товар из корзины
- посчитать стоимость товара в корзине
- задать доставку
- checkout - вернуть что все ок, если есть продукты и параметры доставки
Product: id, name, price
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и id магазина
 */


class Product {
  constructor(public id: number,
              public name: string,
              public price: number) {
  }
}

class Delivery {
  constructor(public date: Date) {
  }
}

class DeliveryHome extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class DeliveryPostOffice extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = DeliveryHome | DeliveryPostOffice

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryHome | DeliveryPostOffice;

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public removeProduct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId);
  }

  public getTotalPrice(): number {
    return this.products.map((p: Product) => p.price).reduce((priseTotal: number, prise: number) => priseTotal + prise);
  }

  public setDelivery(delivery: DeliveryOptions): void {
    this.delivery = delivery;
  }

  public checkout() {
    if (this.products.length === 0) {
      throw new Error('Корзина пуста');
    }
    if (!this.delivery) {
      throw new Error('Не задана доставка');
    }
    return {success: true,};
  }
}


const cart = new Cart();
const product: Product = new Product(1, 'Подушка', 100);
const product2: Product = new Product(2, 'Подушка2', 200);
const product3: Product = new Product(3, 'Подушка3', 300);

cart.addProduct(product);
cart.addProduct(product2);
cart.addProduct(product3);
cart.removeProduct(2);
cart.setDelivery(new DeliveryHome(new Date(), 'г. Москва'));
console.log(cart);
console.log(cart.checkout());
console.log(cart.getTotalPrice());


