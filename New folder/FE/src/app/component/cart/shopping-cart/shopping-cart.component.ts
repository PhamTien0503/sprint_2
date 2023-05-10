import {Component, OnInit, AfterContentInit} from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments';
import {OrderService} from '../../../service/order.service';
import {Order} from '../../../model/order';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {OrderDetail} from '../../../model/order-detail';
import {CartService} from '../../../service/cart.service';
import Swal from 'sweetalert2';
import {OrderDetailDto} from '../../../model/order-detail-dto';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, AfterContentInit {
  idUser?: number;
  order?: Order;
  orderDetailList?: OrderDetail [];
  priceTotal: number;
  priceDetails = [];
  priceTransfer = 0;
  total: number;
  value = 'none';

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.view();
    document.getElementById('payments').style.display = this.value;
    this.activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      this.idUser = parseInt(paramap.get('idUser'), 10);
      this.orderService.getOrder(this.idUser).subscribe(next => {
        this.order = next;
        this.cartService.getOrderDetailByOrder(next.id).subscribe(orderDetails => {
          this.orderDetailList = orderDetails;
          for (const it of orderDetails) {
            this.priceDetails.push(it.product.price * it.orderQuantity);
          }
          this.getPrice();
        });
      });
    });
  }

  ngAfterContentInit(): void {
    render(
      {
        id: '#payments',
        currency: 'USD',
        value: '100000',
        onApprove: (details) => {
          alert('thanh toán thành công');
        }
      }
    );
  }

  view(): void {
    window.scrollTo(0, 0);
  }

  minus(i) {
    if (this.orderDetailList[i].orderQuantity > 1) {
      this.orderDetailList[i].orderQuantity -= 1;
      const orderDetailDto: OrderDetailDto = {
        id: this.orderDetailList[i].id,
        orderQuantity: this.orderDetailList[i].orderQuantity
      };
      this.cartService.updateOrderDetailById(orderDetailDto).subscribe(next => {
        this.priceDetails[i] = this.orderDetailList[i].orderQuantity * this.orderDetailList[i].product.price;
        this.getPrice();
      });
    }
  }

  plus(value: string, i: number) {
    let quantity = parseInt(value, 10);
    quantity += 1;
    if (quantity > this.orderDetailList[i].product.productQuantity) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: 'error',
        title: 'Bạn đã chọn vượt quá số lượng trong kho. Vui lòng nhập lại'
      });
    } else {
      this.orderDetailList[i].orderQuantity += 1;
      const orderDetailDto: OrderDetailDto = {
        id: this.orderDetailList[i].id,
        orderQuantity: this.orderDetailList[i].orderQuantity
      };
      this.cartService.updateOrderDetailById(orderDetailDto).subscribe(next => {
        this.priceDetails[i] = this.orderDetailList[i].orderQuantity * this.orderDetailList[i].product.price;
        this.getPrice();
      });
    }
  }

  checkQuantity(value: string, i: number) {
    const quantity = +value;
    if (quantity < 1 || !Number.isInteger(quantity)) {
      this.ngOnInit();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: 'error',
        title: 'Vui lòng nhập số nguyên dương'
      });
    } else {
      if (quantity > this.orderDetailList[i].product.productQuantity) {
        this.ngOnInit();
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
        Toast.fire({
          icon: 'error',
          title: 'Bạn đã chọn vượt quá số lượng trong kho. Vui lòng nhập lại'
        });
      } else {
        this.orderDetailList[i].orderQuantity = quantity;
        const orderDetailDto: OrderDetailDto = {
          id: this.orderDetailList[i].id,
          orderQuantity: this.orderDetailList[i].orderQuantity
        };
        this.cartService.updateOrderDetailById(orderDetailDto).subscribe(next => {
          this.priceDetails[i] = this.orderDetailList[i].orderQuantity * this.orderDetailList[i].product.price;
          this.getPrice();
        });
      }
    }
  }

  updateStatus(i: number) {
    if (this.orderDetailList[i].choose === true) {
      this.orderDetailList[i].choose = false;
    } else {
      this.orderDetailList[i].choose = true;
    }
    const orderDetailDto: OrderDetailDto = {
      id: this.orderDetailList[i].id,
      choose: this.orderDetailList[i].choose,
      orderQuantity: this.orderDetailList[i].orderQuantity,
    };
    this.cartService.updateOrderDetailById(orderDetailDto).subscribe(next => {
      this.getPrice();
    });
  }

  getPrice() {
    this.priceTotal = 0;
    this.total = 0;
    for (const od of this.orderDetailList) {
      if (od.choose === true) {
        this.priceTotal += od.orderQuantity * od.product.price;
        this.total = this.priceTotal + this.priceTransfer;
      }
    }
  }

  showPayment() {
    this.value = 'block';
    document.getElementById('payments').style.display = this.value;
  }
}
