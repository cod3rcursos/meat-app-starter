import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    const existingItem: CartItem = this.items.find(
      i => i.menuItem.id === item.id
    );
    existingItem
      ? existingItem.increment()
      : this.items.push(new CartItem(item));
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  increaseQty(item: CartItem) {
    item.increment();
  }

  decreaseQty(item: CartItem) {
    item.decrement();
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  total(): number {
    return this.items.reduce((result, next) => next.value() + result, 0);
  }
}
