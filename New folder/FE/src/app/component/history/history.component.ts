import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order';
import {OrderDetail} from '../../model/order-detail';
import {OrderService} from '../../service/order.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  idUser?: number;
  order?: Order;
  orderDetailList?: OrderDetail [];
  priceTotal: number;
  priceDetails = [];
  priceTransfer = 0;
  total: number;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      this.idUser = parseInt(paramap.get('idUser'), 10);
      this.orderService.getOrder(this.idUser).subscribe(next => {
        this.order = next;
        this.cartService.getOrderDetailByOrder(next.id).subscribe(orderDetails => {
          this.orderDetailList = orderDetails;
          for (const it of orderDetails) {
            this.priceDetails.push(it.product.price * it.orderQuantity);
          }
        });
      });
    });
  }

}
