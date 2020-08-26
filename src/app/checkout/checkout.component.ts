import {Component, OnInit} from '@angular/core';
import {PersonalDataService} from '../services/personal.data.service';
import {AuthService} from '../_core/auth.service';
import {ToastService} from '../services/toast.service';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {Router} from '@angular/router';
import {PaymentService} from '../services/payment.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public personalData = {fullname: '', address: '', postcode: '', city: '', uid: '', stripeId: ''};
  public sum = 0;

  constructor(private personalDataService: PersonalDataService,
              private authService: AuthService,
              private toastService: ToastService,
              private shoppingCartService: ShoppingCartService,
              private router: Router,
              private paymentService: PaymentService) {
  }

  async ngOnInit() {
    this.sum = history.state.data.sum;
    this.personalData = await this.personalDataService.getPersonalDataByUID(this.authService.getCurrentUserUid());
  }

  async checkout() {
    await this.shoppingCartService.emptyCart();
    this.paymentService.pay(this.sum * 100, this.personalData.stripeId).then(() => {
      this.router.navigateByUrl('/checkout-loading');
    });
  }
}
