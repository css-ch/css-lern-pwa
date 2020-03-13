import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public async getProductsByName(name: string) {
    return await this.http.get<Product[]>(environment.apiUrl + '/product/find/' + name).toPromise();
  }

  public async getProductsByTypeBrandName(type: string, brand: string, color: string) {
    return await this.http.get<Product[]>(environment.apiUrl + '/product/'
      + type + '/' + brand + '/' + color).toPromise();
  }

  public async getProducts() {
    return await this.http.get<Product[]>(environment.apiUrl + '/product/all').toPromise();
  }

  public async getRandomProduct() {
    return await this.http.get<Product>(environment.apiUrl + '/product/random').toPromise();
  }

  public async getProductNames() {
    return await this.http.get<any[]>(environment.apiUrl + '/product/all/names').toPromise();
  }
}
