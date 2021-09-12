import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabarit-full-width',
  templateUrl: './gabarit-full-width.component.html',
  styleUrls: ['./gabarit-full-width.component.scss']
})
export class GabaritFullWidthComponent implements OnInit {
  @Input() public title!: any;

  constructor() {
    //this.title = 'Ohhhhh le joli title';
    console.log(this.title);
  }

  ngOnChanges(): void {
    console.log(this.title);
  }

  ngOnInit(): void {
    console.log(this.title);
  }

}
