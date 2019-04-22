import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "app/shared/shared.module";

import { OrderComponent } from "./order.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";

const ROUTES: Routes = [
  { path: '', component: OrderComponent },
]

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
})

export class OrderModule { }