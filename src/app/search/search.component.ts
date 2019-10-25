import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";

interface Brand {
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchName: string = '';
  brandsList: Observable<Brand[]>;
  brandsListRef: AngularFireList<Brand>;

  constructor(private afDb: AngularFireDatabase,
              private router: Router,
              private productService: ProductService) {
    this.brandsListRef = afDb.list('/brands');
    this.brandsList = this.brandsListRef.valueChanges();
  }

  ngOnInit() {

  }

  async searchWithName() {
    const results =  await this.productService.getProductsByName(this.searchName);
    this.router.navigateByUrl('search-results', { state: { data: { productList: results }}});
  }

}
