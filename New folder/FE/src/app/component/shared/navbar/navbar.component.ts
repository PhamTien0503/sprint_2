import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {TokenStorageService} from '../../../service/token-storage.service';
import {ShareService} from '../../../service/share.service';
import {CartService} from '../../../service/cart.service';
import {OrderService} from '../../../service/order.service';
import {Order} from '../../../model/order';
import {OrderDetail} from '../../../model/order-detail';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;
  currentUser: string;
  nameEmployee: string;
  role: string;
  isLoggedIn = false;
  idUser: number;
  accountOrderDetail: number;
  order: Order;
  orderDetailList: OrderDetail[];

  constructor(private tokenStorageService: TokenStorageService,
              private shareService: ShareService,
              private router: Router,
              private cartService: CartService,
              private orderService: OrderService) {
  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.currentUser = this.tokenStorageService.getUser().username;
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
      this.currentUser = this.tokenStorageService.getUser().nameUser;
      this.idUser = this.tokenStorageService.getUser().idUser;
    }
    this.isLoggedIn = this.username != null;
    this.getUsernameAccount();
    this.getOrderDetail();
  }


  ngOnInit(): void {
    this.shareService.getClickEvent().subscribe(() => {
      this.loadHeader();
    });
    this.loadHeader();
  }

  async logOut() {
    this.tokenStorageService.signOut();
    this.shareService.sendClickEvent();
    await Swal.fire({
      text: 'Đăng xuất thành công',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
    await this.router.navigateByUrl('/');
    location.reload();
  }

  getUsernameAccount() {
    if (this.tokenStorageService.getToken()) {
      this.nameEmployee = this.tokenStorageService.getUser().name;
    }
  }

  getOrderDetail() {
    this.orderService.getOrder(this.idUser).subscribe(next => {
      this.order = next;
      this.cartService.getOrderDetailByOrder(this.order.id).subscribe(carts => {
        this.orderDetailList = carts;
        this.accountOrderDetail = carts.length;
      });
    });
  }

}
