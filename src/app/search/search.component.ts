import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';

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

  constructor(private afDb: AngularFireDatabase) {
    this.brandsListRef = afDb.list('/brands');
    this.brandsList = this.brandsListRef.valueChanges();
  }

  ngOnInit() {

  }

}
