import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ShoppingCartService} from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Product = {name: '', image: '', price: 0, brand: '', color: '', id: 0, type: ''};

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.product = history.state.data.product;
  }

  addProductToCart() {
    this.shoppingCartService.addProductToShoppingCart(this.product);
  }

  emptyCart() {
    this.shoppingCartService.emptyCart();
  }

}
