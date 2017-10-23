import { MenuItem } from '../menu-item/menu-item.model';

export class CartItem {
  constructor(public menuItem: MenuItem, public quantity = 1) {}

  value(): number {
    let { menuItem, quantity } = this;
    return menuItem.price * quantity;
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    this.quantity--;
  }
}
