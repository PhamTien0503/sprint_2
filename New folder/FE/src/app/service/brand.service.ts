import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brand} from '../model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) {
  }

  getBrand(): Observable<Brand[]> {
    return this.http.get<Brand[]>('http://localhost:8080/brand/list');
  }
}
