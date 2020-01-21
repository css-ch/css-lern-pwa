import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {environment} from '../../environments/environment';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public shoppingCartState$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {
  }

  async getCart() {
    return await this.http.get<Product[]>(environment.apiUrl + '/shopping-cart').toPromise();
  }

  public async addProductToShoppingCart(product: Product) {
    await this.http.post(environment.apiUrl + '/shopping-cart/add', product, {responseType: 'text'}).toPromise();
    this.shoppingCartState$.next();
  }

  public async emptyCart() {
    await this.http.post(environment.apiUrl + '/shopping-cart/empty', {}).toPromise();
    this.shoppingCartState$.next();
  }
}
