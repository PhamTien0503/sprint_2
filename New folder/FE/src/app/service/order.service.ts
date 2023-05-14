import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../model/order';
import {HttpClient} from '@angular/common/http';
import {OrderDto} from '../model/order-dto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private URL = 'http://localhost:8080/order';

  constructor(private http: HttpClient) {
  }

  getOrder(idUser: number): Observable<Order> {
    return this.http.get<Order>(this.URL + '/get/' + idUser);
  }

  createOrderByIdUser(order: OrderDto): Observable<OrderDto> {
    return this.http.post<OrderDto>(this.URL + '/create', order);
  }

  updateOrderById(orderDto: OrderDto): Observable<OrderDto> {
    return this.http.patch<OrderDto>(this.URL + '/update', orderDto);
  }
}
