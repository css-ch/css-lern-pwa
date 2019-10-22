import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  productList: Observable<Product[]>;
  productListRef: AngularFireList<Product>;

  constructor(private afDb: AngularFireDatabase) {
    this.productListRef = afDb.list('/products');
    this.productList = this.productListRef.valueChanges(); }

  ngOnInit() {

  }

}
