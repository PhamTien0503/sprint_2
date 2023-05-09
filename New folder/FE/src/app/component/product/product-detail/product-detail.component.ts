import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {ShareProductService} from '../../../service/share-product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '../../../service/product.service';
import {ShareProductCartService} from '../../../service/share-product-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail?: Product;
  idProduct?: number;
  img?: string;

  constructor(private shareProductService: ShareProductService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private shareProductCartService: ShareProductCartService) {
    this.shareProductService.getClickEvent().subscribe(next => {
    });
  }

  ngOnInit(): void {
    this.view();
    this.activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
      this.idProduct = parseInt(paramap.get('id'), 10);
      this.productService.findProductDetail(this.idProduct).subscribe(next => {
        this.productDetail = next;
      });
    });
  }

  view(): void {
    window.scrollTo(0, 0);
  }

  addToCart() {
    this.shareProductCartService.addToCart(this.productDetail);
  }
}
