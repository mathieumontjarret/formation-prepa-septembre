import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() public collection!: Order[];
  @Input() public headers!: string[];
  constructor() {
    console.log(this.collection);
    console.log(this.headers);
  }

  ngOnChanges(): void {
    console.log(this.collection);
    console.log(this.headers);
  }

  ngOnInit(): void {
    console.log(this.collection);
    console.log(this.headers);
  }

}
