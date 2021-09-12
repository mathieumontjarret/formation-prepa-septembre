import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gabarit-container',
  templateUrl: './gabarit-container.component.html',
  styleUrls: ['./gabarit-container.component.scss'],
})
export class GabaritContainerComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = 'Ohhhhh le joli title';
  }

  ngOnInit(): void {}
}
