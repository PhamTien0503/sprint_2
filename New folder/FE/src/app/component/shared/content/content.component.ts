import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';
import {Brand} from '../../../model/brand';
import {ProductType} from '../../../model/product-type';
import {BrandService} from '../../../service/brand.service';
import {ProductTypeService} from '../../../service/product-type.service';
import {ShareService} from '../../../service/share.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  products?: Product[];
  brands?: Brand[];
  productTypes?: ProductType[];
  size = 8;
  page = 0;
  nameProduct = '';
  brandId = 0;
  productTypeId = 0;
  totalElement?: number;

  constructor(private productService: ProductService,
              private brandService: BrandService,
              private productTypeService: ProductTypeService,
              private shareService: ShareService) {
  }

  ngOnInit(): void {
    this.view();
    this.brandService.getBrand().subscribe(next => {
      this.brands = next;
    });
    this.productTypeService.getProductType().subscribe(next => {
      this.productTypes = next;
    });
    this.getAllProduct(this.nameProduct, this.brandId, this.productTypeId, this.size);
  }

  view(): void {
    window.scrollTo(0, 0);
  }

  getAllProduct(nameProduct: string, brandId: number, productTypeId: number, size: number) {
    this.productService.getProduct(nameProduct, brandId, productTypeId, size).subscribe(next => {
      this.products = next.content;
      this.totalElement = next.totalElements;

    });
  }

  show(nameProduct: string, brandId: string, productTypeId: string) {
    this.nameProduct = nameProduct;
    this.brandId = parseInt(brandId, 10);
    this.productTypeId = parseInt(productTypeId, 10);
    this.getAllProduct(this.nameProduct, this.brandId, this.productTypeId, this.size);
  }

  loadMore() {
    this.size += 4;
    this.getAllProduct(this.nameProduct, this.brandId, this.productTypeId, this.size);
  }
}
