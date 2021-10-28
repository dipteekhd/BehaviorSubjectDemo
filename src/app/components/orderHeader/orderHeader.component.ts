import { Component } from "@angular/core";
import { OrderService } from "src/app/service/order.service";

@Component({
  selector: "order-header",
  templateUrl: "./orderHeader.component.html"
})
export class OrderHeaderComponent {
  cartTotal: number;
  favouriteTotal: number;
  constructor(private _orderService: OrderService) {}
  ngOnInit() {
    this._orderService.getOrderCount().subscribe((orderCount) => {
      this.cartTotal = orderCount.cartTotal;
      this.favouriteTotal = orderCount.favouriteTotal;
    });
  }
}
