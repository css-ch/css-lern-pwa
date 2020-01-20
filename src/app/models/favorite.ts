import {PersonalData} from './personal-data';
import {Product} from './product';

export interface Favorite {
  id: number;
  user: PersonalData;
  product: Product;
}
