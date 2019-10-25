import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public async getProductsByName(name: string) {
    return await this.http.get<Product>(environment.apiUrl + '/product/' + name).toPromise();
  }

}
