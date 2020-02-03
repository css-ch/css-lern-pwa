import {Component, OnInit} from '@angular/core';
import {PersonalDataService} from '../services/personal.data.service';
import {AuthService} from '../_core/auth.service';
import {ToastService} from '../services/toast.service';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public personalData = {fullname: '', address: '', postcode: '', city: '', uid: ''};

  constructor(private personalDataService: PersonalDataService,
              private authService: AuthService,
              private toastService: ToastService,
              private shoppingCartService: ShoppingCartService,
              private router: Router) {
  }

  async ngOnInit() {
    this.personalData = await this.personalDataService.getPersonalDataByUID(this.authService.getCurrentUserUid());
  }

  checkout() {
    this.toastService.createToastMessage('Ihr Einkauf wurde getätigt');
    this.shoppingCartService.emptyCart();
    this.router.navigateByUrl('/home');
  }
}
