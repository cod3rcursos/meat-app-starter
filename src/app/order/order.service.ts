import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartServices } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Order } from "./order.model";

import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class OrderService {
  constructor(
    private cartService: ShoppingCartServices,
    private http: HttpClient
  ) {}

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    return this.http
      .post<Order>(`${MEAT_API}/orders`, order)
      .map((order) => order.id);
  }
}
