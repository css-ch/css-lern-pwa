import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ProductService} from '../services/product.service';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

interface Brand {
  name: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  type = 'any';
  brand = 'any';
  color = 'any';

  searchName = '';
  brandsList: Observable<Brand[]>;
  productNames: string[];
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  brandsListRef: AngularFireList<Brand>;

  constructor(private afDb: AngularFireDatabase,
              private router: Router,
              private productService: ProductService) {
  }

  async ngOnInit() {
    this.productNames = await this.productService.getProductNames();
    console.log(this.productNames);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.productNames.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  async searchWithName() {
    const results = await this.productService.getProductsByName(this.searchName);
    this.router.navigateByUrl('search-results', {state: {data: {productList: results}}});
  }

  async searchWithTypeBrandName() {
    const results = await this.productService.getProductsByTypeBrandName(this.type, this.brand, this.color);
    this.router.navigateByUrl('search-results', {state: {data: {productList: results}}});
  }

  async searchAllProducts() {
    this.productService.getProducts().then(async (allProducts) => {
      this.router.navigateByUrl('search-results', {state: {data: {productList: {productEntities: allProducts}}}});
    });
  }
}
