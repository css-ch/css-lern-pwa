import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {Product} from "../models/product";

interface Brand {
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  brandsList: Observable<Brand[]>;
  brandsListRef: AngularFireList<Brand>;

  constructor(private afDb: AngularFireDatabase,
              private router: Router) {
    this.brandsListRef = afDb.list('/brands');
    this.brandsList = this.brandsListRef.valueChanges();
  }

  ngOnInit() {

  }

}
