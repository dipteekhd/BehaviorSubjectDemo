import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { OrderDashboardComponent } from "./components/orderDashboard/orderDashboard.component";
import { OrderHeaderComponent } from "./components/orderHeader/orderHeader.component";
import { OrderTableComponent } from "./components/orderTable/orderTable.component";

@NgModule({
  declarations: [
    AppComponent,
    OrderDashboardComponent,
    OrderHeaderComponent,
    OrderTableComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
