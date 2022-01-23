import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCartServices {
  items: CartItem[] = [];
  contItens: number = 0;

  clear() {
    this.items = [];
  }
  addItem(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.contItens += 1;
      //  console.log(this.contItens);
      this.items.push(new CartItem(item));
    }
  }
  removeItem(item: CartItem) {
    this.contItens -= 1;
    // console.log(this.contItens);
    this.items.splice(this.items.indexOf(item), 1);
  }
  total(): number {
    return this.items
      .map((item) => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
