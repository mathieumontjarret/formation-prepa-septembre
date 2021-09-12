import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public myTitle = { name: "List Orders" };
  public collection!: Order[];
  public headers = ['Type', 'Client', 'nbJours', 'TjmHt', 'Total HT', 'Total TTC', 'State'];
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((data) => this.collection = data);
  }

  ngOnInit(): void {
  }

  public changeTitle(): void {
    this.myTitle = {name: "My Order's List"};
  }

}
