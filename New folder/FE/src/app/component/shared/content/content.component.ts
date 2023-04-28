import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  products?: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.view();
    this.productService.getProduct('').subscribe(next=>{
      this.products=next.content;
    });
  }

  view(): void {
    window.scrollTo(0, 0);
  }

}
