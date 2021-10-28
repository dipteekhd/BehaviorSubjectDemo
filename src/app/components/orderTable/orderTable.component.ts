import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/service/order.service";

@Component({
  selector: "order-table",
  templateUrl: "./orderTable.component.html"
})
export class OrderTableComponent implements OnInit {
  itemList = [
    { name: "Item 1", action: { inCart: false, isFavourite: false } },
    { name: "Item 2", action: { inCart: false, isFavourite: false } },
    { name: "Item 3", action: { inCart: false, isFavourite: false } }
  ];
  favouriteTotal: number;
  cartTotal: number;
  constructor(private _orderService: OrderService) {}
  ngOnInit() {
    this._orderService.getOrderCount().subscribe((orderCount) => {
      this.cartTotal = orderCount.cartTotal;
      this.favouriteTotal = orderCount.favouriteTotal;
    });
  }

  addToCart(item) {
    item.inCart = true;
    let count = {
      cartTotal: this.cartTotal + 1,
      favouriteTotal: this.favouriteTotal
    };
    this._orderService.setOrderCount(count);
  }

  addToWishList(item) {
    item.isFavourite = true;
    let count = {
      cartTotal: this.cartTotal,
      favouriteTotal: this.favouriteTotal + 1
    };
    this._orderService.setOrderCount(count);
  }
}
