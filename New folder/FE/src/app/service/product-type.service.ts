import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductType} from '../model/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  constructor(private http: HttpClient) {
  }

  getProductType(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('http://localhost:8080/product_type/list');
  }

}
