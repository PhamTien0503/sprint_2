import {Order} from './order';
import {Product} from './product';

export interface OrderDetail {
  id?: number;
  orderQuantity?: number;
  choose?: boolean;
  order?: Order;
  product?: Product;
}
