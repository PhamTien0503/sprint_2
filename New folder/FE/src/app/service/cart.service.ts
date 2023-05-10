import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OrderDetail} from '../model/order-detail';
import {OrderDetailDto} from '../model/order-detail-dto';

const URL = 'http://localhost:8080/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {
  }

  createCart(orderDetailDto: OrderDetailDto): Observable<OrderDetailDto> {
    return this.http.post(URL + '/create', orderDetailDto);
  }

  getOrderDetailByOrder(idOrder: number): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(URL + '/list/' + idOrder);
  }

  updateOrderDetailById(orderDetail: OrderDetail): Observable<OrderDetail> {
    return this.http.patch(URL + '/update/', orderDetail);
  }

  getOrderDetailByOrderAndProduct(idOrder: number, idProduct: number): Observable<OrderDetail> {
    return this.http.get<OrderDetail>(URL + '/find-by-order-product/' + idOrder + '/' + idProduct);
  }
}
