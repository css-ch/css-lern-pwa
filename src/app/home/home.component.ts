import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_core/auth.service';
import {User} from 'firebase';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  product: Product[];

  constructor(private authService: AuthService,
              private productService: ProductService) {
  }

  async ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.product = await this.productService.getRandomProducts();
  }

}
