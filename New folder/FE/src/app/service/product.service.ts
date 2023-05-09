import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';

const URL = 'http://localhost:8080/api/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getProduct(nameProduct: string, brandId: number, productTypeId: number, size: number): Observable<Page<Product>> {
    return this.httpClient.get<Page<Product>>(URL + 'list?nameProduct=' + nameProduct + '&brandId=' +
      brandId + '&productTypeId=' + productTypeId + '&size=' + size);
  }

  findProductDetail(id: number): Observable<Product> {
    return this.httpClient.get<Product>(URL + 'detail/' + id);
  }
}

export interface Page<T> {
  content: T[];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
    };
    pageNumber: number;
    pageSize: number;
    offset: number;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
