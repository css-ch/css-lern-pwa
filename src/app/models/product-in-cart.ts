import {Product} from './product';

export interface ProductInCart {
  product: Product;
  amount: number;
  total: number;
}
