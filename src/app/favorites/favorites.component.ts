import {Component, OnInit} from '@angular/core';
import {FavoriteService} from '../services/favorite.service';
import {AuthService} from '../_core/auth.service';
import {Product} from '../models/product';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: Product[] = [];
  
  constructor(private favoriteService: FavoriteService,
              private authService: AuthService) {
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
}
