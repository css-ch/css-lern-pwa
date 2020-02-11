import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_core/auth.service';
import {User} from 'firebase';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';
import {PersonalDataService} from '../services/personal.data.service';
import {FavoriteService} from '../services/favorite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  product: Product = {id: -1, image: '', price: 0.00, color: '', type: '', brand: '', name: ''};

  constructor(private authService: AuthService,
              private productService: ProductService,
              private personalDataService: PersonalDataService,
              private favoriteService: FavoriteService,
              private router: Router) {
  }

  async ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.product = await this.productService.getRandomProduct();
  }

  async toggleFavorite() {
    this.favoriteService.toggleFavorite(await this.personalDataService.getPersonalDataByUID(this.authService.getCurrentUserUid()),
      this.product);
  }

  showProduct() {
    this.router.navigateByUrl('product-detail', {state: {data: {product: this.product}}});
  }
}
