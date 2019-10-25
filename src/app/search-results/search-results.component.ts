import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {ActivatedRoute, Route} from "@angular/router";

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
