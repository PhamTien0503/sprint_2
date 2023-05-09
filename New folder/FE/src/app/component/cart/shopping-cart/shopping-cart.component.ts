import {Component, OnInit, AfterContentInit} from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';
import {ShareProductCartService} from '../../../service/share-product-cart.service';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, AfterContentInit {
  productList: Product[];

  constructor(private shareProductCartService: ShareProductCartService) {
    this.shareProductCartService.cartItems.subscribe(next => {
      this.productList = next;
      console.log(this.productList);
    });
  }

  ngOnInit(): void {
    this.view();
  }

  ngAfterContentInit(): void {
    render(
      {
        id: '#payments',
        currency: 'USD',
        value: '100.00',
        onApprove: (details) => {
          alert('thanh toán thành công');
        }
      }
    );
  }

  view(): void {
    window.scrollTo(0, 0);
  }
}
