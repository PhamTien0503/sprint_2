import {Component, OnInit} from '@angular/core';
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
  priceDetails = [];
  total: number;
  page = 0;
  size = 5;

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      this.idUser = parseInt(paramap.get('idUser'), 10);
      this.cartService.getHistory(this.idUser, this.size).subscribe(next => {
        this.orderDetailList = next.content;
        for (const it of this.orderDetailList) {
          this.priceDetails.push(it.product.price * it.orderQuantity);
        }
      });
    });
  }

  loadMore() {
    this.size += 5;
    this.cartService.getHistory(this.idUser, this.size).subscribe(next => {
      this.orderDetailList = next.content;
      for (const it of this.orderDetailList) {
        this.priceDetails.push(it.product.price * it.orderQuantity);
      }
    });
  }
}
