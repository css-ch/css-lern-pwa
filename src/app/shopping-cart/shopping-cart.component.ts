import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {ProductInCart} from '../models/product-in-cart';
import {ProductService} from '../services/product.service';
import {ToastService} from '../services/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  private allProducts: any = [];
  private shoppingCart: Product[] = [];
  public productsInCartDistinct: ProductInCart[] = [];
  public sumCHF = 0;

  constructor(private shoppingCartService: ShoppingCartService,
              private productService: ProductService,
              private toastService: ToastService,
              private router: Router) {
  }

  async ngOnInit() {
    await this.loadData();
  }


  private distinctProducts() {
    let currentProductName = '';
    for (const product of this.allProducts) {

      currentProductName = product.name;

      let count = 0;

      for (const productCart of this.shoppingCart) {
        if (product.name === productCart.name) {
          count++;
        }
      }

      const productInCart = {
        product: product,
        amount: count,
        total: product.price * count
      };

      this.productsInCartDistinct.push(productInCart);

    }
  }

  private removeNonBuyedItems(productList: Array<ProductInCart>) {
    let count = 0;
    for (const product of this.productsInCartDistinct) {
      if (product.amount === 0) {
        this.productsInCartDistinct.splice(count, 1);
        this.removeNonBuyedItems(this.productsInCartDistinct);
      }
      count++;
    }
  }

  private async loadData() {
    this.productService.getProducts().then(async (allProducts) => {
      this.allProducts = allProducts;
      await this.shoppingCartService.getCart().then(async (products) => {
        this.shoppingCart = products;
        this.distinctProducts();
        this.removeNonBuyedItems(this.productsInCartDistinct);
        this.sumCHF = this.count('total');
      });
    });
  }

  private count(key: string) {
    return this.productsInCartDistinct.reduce((a, b) => a + (b[key] || 0), 0);
  }

  async addToCart(product: Product) {
    await this.shoppingCartService.addProductToShoppingCart(product);
    this.productsInCartDistinct = [];
    await this.loadData();
  }

  async removeFromCart(product: Product) {
    await this.shoppingCartService.removeProductFromShoppingCart(product);
    this.productsInCartDistinct = [];
    await this.loadData();
  }

  confirm() {
    if (this.productsInCartDistinct.length !== 0 && this.sumCHF !== 0) {
      this.router.navigateByUrl('checkout', {state: {data: {sum: this.sumCHF}}});
    } else {
      this.toastService.createToastMessage('Ihr Warenkorb ist leer!');
    }
  }
}
