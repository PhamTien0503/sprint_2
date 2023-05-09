import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ShareProductService {

  constructor() {
  }

  private subject = new Subject<any>();

  sendClickEvent(pr: Product) {
    this.subject.next(pr);
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
