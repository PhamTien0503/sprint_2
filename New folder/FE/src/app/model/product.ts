import {Brand} from './brand';
import {ProductType} from './product-type';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  productQuantity?: number;
  releaseDate?: string;
  description?: string;
  img?: string;
  flagDelete?: boolean;
  brands?: Brand;
  productType?: ProductType;
}
