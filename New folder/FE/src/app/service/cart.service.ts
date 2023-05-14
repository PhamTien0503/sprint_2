import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {OrderDetail} from '../model/order-detail';
import {OrderDetailDto} from '../model/order-detail-dto';
import {Page} from './product.service';

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

  updateOrderDetailToNewOrder(orderDetail: OrderDetailDto): Observable<any> {
    return this.http.patch(URL + '/update-to-new', orderDetail);
  }

  getHistory(idUser: number, size: number): Observable<Page<OrderDetail>> {
    return this.http.get<Page<OrderDetail>>(URL + '/list-history/' + idUser + '/?size=' + size);
  }

  deleteOrderDetail(id: number): Observable<any> {
    return this.http.delete(URL + '/delete/' + id);
  }
}
