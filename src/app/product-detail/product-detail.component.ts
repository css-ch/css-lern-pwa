import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {Router} from '@angular/router';
import {FavoriteService} from '../services/favorite.service';
import {AuthService} from '../_core/auth.service';
import {PersonalDataService} from '../services/personal.data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product = {name: '', image: '', price: 0, brand: '', color: '', id: 0, type: ''};

  constructor(private shoppingCartService: ShoppingCartService,
              private router: Router,
              private favoriteService: FavoriteService,
              private auth: AuthService,
              private personalDataService: PersonalDataService) {
  }

  ngOnInit() {
    try {
      this.product = history.state.data.product;
    } catch (e) {
      this.router.navigateByUrl('/home');
    }
  }

  addProductToCart() {
    this.shoppingCartService.addProductToShoppingCart(this.product);
  }

  async toggleFavorite() {
    this.favoriteService.toggleFavorite(await this.personalDataService.getPersonalDataByUID(this.auth.getCurrentUserUid()), this.product);
  }

}
