import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-details/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    {
      label: 'Dinheiro',
      value: 'din'
    },
    {
      label: 'Debito',
      value: 'deb'
    },
    {
      label: 'Credito',
      value: 'cre'
    }
  ];

  constructor(private orderService: OrderService, private router: Router) {}

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  removeItem(item: CartItem) {
    this.orderService.removeItem(item);
  }

  total(): number {
    return this.orderService.total();
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (i: CartItem) => new OrderItem(i.quantity, i.menuItem.id)
    );
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-success']);
      console.log('Compra concluída: ', orderId);
      this.orderService.clear();
    });
  }

  ngOnInit() {}
}
