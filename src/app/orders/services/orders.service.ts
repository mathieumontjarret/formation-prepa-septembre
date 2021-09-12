import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private httpClient: HttpClient) {
    console.log('service instancied')
    this.collection = this.httpClient.get<Order[]>(`${this.urlApi}/orders`);
  }

  // get collection
  public get collection(): Observable<Order[]>{
    return this.collection$
  }

  // set collection
  public set collection(col: Observable<Order[]>){
    this.collection$ = col
  }
}
