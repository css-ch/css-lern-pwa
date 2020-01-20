import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {AuthService} from '../_core/auth.service';
import {PersonalDataService} from '../services/personal.data.service';
import {FavoriteService} from '../services/favorite.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  productList: Product[] = [];

  constructor(private auth: AuthService,
              private userService: PersonalDataService,
              private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.productList = history.state.data.productList.productEntities;
  }

  async toggleFavorite(product: Product) {
    await this.favoriteService.toggleFavorite(await this.userService.getPersonalDataByUID(this.auth.getCurrentUserUid()), product);
  }

}
