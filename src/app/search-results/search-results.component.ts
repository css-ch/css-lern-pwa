import { Component, OnInit } from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  productList: Product[] = [];

  constructor() {}

  ngOnInit() {
    this.productList = history.state.data.productList.productEntities;
  }

}
