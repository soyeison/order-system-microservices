import { Order } from '../entity/order.entity';
import { User } from '../entity/user.entity';

export class OrderRepository {
  private orders: Order[] = [
    {
      id: 1,
      totalPrice: 1,
      orderDate: new Date(),
      addressFirstLine: 'Primera direccion',
      addressSecondLine: 'Segunda direccion',
      addressCountry: '',
      addressPostCode: '',
      orderLines: [],
      user: new User(),
    },
  ];

  findById(id: number) {
    console.log(id);
    return true;
  }

  findAll() {
    return this.orders;
  }

  save(order: Order) {
    this.orders.push(order);
    return order;
  }
}
