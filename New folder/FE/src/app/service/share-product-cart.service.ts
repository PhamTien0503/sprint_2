import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareProductCartService {
  private items = new BehaviorSubject<any>([]);
  cartItems = this.items.asObservable();

  constructor() { }

  addToCart(product) {
    this.items.next([...this.items.value, product]);
  }
}
