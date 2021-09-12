import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public myTitle = { name: "List Orders" };
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe();
  }

  ngOnInit(): void {
  }

  public changeTitle(): void {
    this.myTitle = {name: "My Order's List"};
  }

}
