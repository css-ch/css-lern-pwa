import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../_core/auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../../services/toast.service';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Product} from '../../models/product';
import {SizeServiceService} from '../../services/size-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [
    trigger('added', [
      state('notAdded', style({})),
      state('added', style({transform: 'rotateY(360deg)'})),
      transition('notAdded => added', [
        animate('0.5s')
      ]),
      transition('added => notAdded', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class ToolbarComponent implements OnInit {
  public isAdded = true;
  public priceSum = 0;
  public shoppingCart: Product[];
  public authenticated: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private toastService: ToastService,
              private shoppingCartService: ShoppingCartService,
              public sizeService: SizeServiceService) {
  }

  public logout() {
    this.authService.logout();
    this.toastService.createToastMessage('Logout erfolgreich');
    this.router.navigateByUrl('/logout-spinner');
  }

  async ngOnInit() {
    this.authenticated = this.authService.authenticated;
    this.shoppingCartService.shoppingCartState$.subscribe(async () => {
      await this.updateShoppingCart();
      this.isAdded = false;
      setTimeout(() => {
        this.isAdded = true;
      }, 1000);
    });
    await this.updateShoppingCart();
  }

  private async updateShoppingCart() {
    this.shoppingCart = await this.shoppingCartService.getCart();
    this.sumPrice();
  }

  private sumPrice() {
    let sum = 0.00;
    for (const product of this.shoppingCart) {
      sum += product.price;
    }
    this.priceSum = sum;
  }
}
