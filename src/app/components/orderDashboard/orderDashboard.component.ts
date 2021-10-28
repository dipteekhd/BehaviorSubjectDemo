import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/service/order.service";

@Component({
  selector: "order-dashboard",
  templateUrl: "./orderDashboard.component.html",
  styleUrls: ["./orderDashboard.component.css"]
})
export class OrderDashboardComponent implements OnInit {
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
