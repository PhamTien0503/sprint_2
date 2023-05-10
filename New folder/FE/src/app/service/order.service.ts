import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../model/order';
import {HttpClient} from '@angular/common/http';

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
}
