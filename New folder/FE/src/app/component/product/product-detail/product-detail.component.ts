import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {OrderService} from '../../../service/order.service';
import {TokenStorageService} from '../../../service/token-storage.service';
import {Order} from '../../../model/order';
import {OrderDetail} from '../../../model/order-detail';
import {CartService} from '../../../service/cart.service';
import {OrderDetailDto} from '../../../model/order-detail-dto';
import Swal from 'sweetalert2';
import {log} from 'util';
import {ShareService} from '../../../service/share.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail?: Product;
  idProduct?: number;
  img?: string;
  idUser?: number;
  order?: Order;
  orderDetailDto: OrderDetailDto = {};
  orderDetail?: OrderDetail;


  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private orderService: OrderService,
    private tokenStorageService: TokenStorageService,
    private cartService: CartService,
    private shareService: ShareService) {
  }

  ngOnInit(): void {
    this.view();
    this.orderDetailDto.orderQuantity = 1;
    this.activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      this.idProduct = parseInt(paramap.get('id'), 10);
      this.idUser = this.tokenStorageService.getUser().idUser;
      this.orderService.getOrder(this.idUser).subscribe(order => {
        this.orderDetailDto.orderId = order.id;
        this.cartService.getOrderDetailByOrderAndProduct(order.id, this.idProduct).subscribe(orderDetail => {
          this.orderDetail = orderDetail;
        });
      });
      this.productService.findProductDetail(this.idProduct).subscribe(next => {
        this.productDetail = next;
        this.orderDetailDto.productId = next.id;
      });
    });
  }

  view(): void {
    window.scrollTo(0, 0);
  }

  addToCart(value: string) {
    this.orderDetailDto.orderQuantity = parseInt(value, 10);
    let quantity = parseInt(value, 10);
    if (this.orderDetail !== null) {
      quantity += this.orderDetail.orderQuantity;
    }
    if (quantity > this.productDetail.productQuantity) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: 'error',
        title: 'Bạn đã chọn vượt quá số lượng trong kho. Vui lòng chọn lại'
      });
    } else {
      this.cartService.createCart(this.orderDetailDto).subscribe(next => {
        this.shareService.sendClickEvent();
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
        Toast.fire({
          icon: 'success',
          title: 'Bạn đã thêm sản phẩm vào giỏ hàng'
        });
      });
    }
  }

  minus() {
    if (this.orderDetailDto.orderQuantity > 1) {
      this.orderDetailDto.orderQuantity -= 1;
    }
  }

  plus(value: string) {
    let quantity = parseInt(value, 10);
    quantity += 1;
    this.orderDetailDto.orderQuantity += 1;
    if (this.orderDetail !== null) {
      quantity += this.orderDetail.orderQuantity;
      if (quantity > this.productDetail.productQuantity) {
        this.orderDetailDto.orderQuantity -= 1;
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
      }
    }
    {
      if (quantity > this.productDetail.productQuantity) {
        this.orderDetailDto.orderQuantity = 1;
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
      }

    }
  }

  checkQuantity(value: string) {
    let quantity = +value;
    if (quantity < 1 || !Number.isInteger(quantity)) {
      this.orderDetailDto.orderQuantity = 1;
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
      if (this.orderDetail !== null) {
        quantity += this.orderDetail.orderQuantity;
        if (quantity > this.productDetail.productQuantity) {
          this.orderDetailDto.orderQuantity = 1;
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
        }
      } else {
        if (quantity > this.productDetail.productQuantity) {
          this.orderDetailDto.orderQuantity = 1;
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
        }

      }
    }
  }
}
