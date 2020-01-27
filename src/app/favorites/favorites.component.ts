import {Component, OnInit} from '@angular/core';
import {FavoriteService} from '../services/favorite.service';
import {AuthService} from '../_core/auth.service';
import {Product} from '../models/product';
import {PersonalDataService} from '../services/personal.data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: Product[] = [];

  constructor(private favoriteService: FavoriteService,
              private authService: AuthService,
              private userService: PersonalDataService,
              private router: Router) {
  }

  async ngOnInit() {
    await this.loadFavorites();
  }

  async loadFavorites() {
    await this.favoriteService.getFavoritesByUuid(this.authService.getCurrentUserUid()).then((favorites) => {
      // tslint:disable
      for (let favorite of favorites) {
        this.favorites.push(favorite.product);
      }
    });
  }

  async toggleFavorite(product: Product) {
    await this.favoriteService.toggleFavorite(await this.userService.getPersonalDataByUID(this.authService.getCurrentUserUid()), product);
    this.favorites = [];
    this.loadFavorites();
  }

  openProductDetails(product: Product) {
    this.router.navigateByUrl('/product-detail', {state: {data: {product: product}}});
  }
}
