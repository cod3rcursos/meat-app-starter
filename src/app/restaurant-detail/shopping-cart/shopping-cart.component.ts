import { Component, OnInit } from "@angular/core";
import { ShoppingCartServices } from "./shopping-cart.service";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
})
export class ShoppingCartComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartServices) {}

  ngOnInit() {}

  items(): any[] {
    return this.shoppingCartService.items;
  }

  removeItem(itm: any) {
    this.shoppingCartService.removeItem(itm);
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }

  total(): number {
    return this.shoppingCartService.total();
  }
}
