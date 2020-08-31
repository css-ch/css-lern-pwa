import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../_core/auth.service';
import {PaymentService} from '../services/payment.service';
import {PersonalDataService} from '../services/personal.data.service';
import {SwPush} from '@angular/service-worker';
import {PushService} from '../services/push.service';
import {PwaService} from '../services/pwa.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY = 'BBxl4HYXkZUsBE-POsCBVA4Xa333VJqQjswZmgxdfaL7h9KTXdETBFTgVz6S92oFi6q9XTWlvwIkzYyiE1eg6Us';

  constructor(private router: Router,
              private authService: AuthService,
              private swPush: SwPush,
              private pushService: PushService,
              public pwaService: PwaService) {
  }

  ngOnInit() {
  }

  public changeUsername() {
    this.router.navigateByUrl('/change-username');
  }

  public changePassword() {
    this.authService.changePassword(this.authService.getCurrentUser().email);
  }

  public changePersonalData() {
    this.router.navigateByUrl('/personal-data');
  }

  public async registerCustomer() {

  }

  public showPayments() {
    this.router.navigateByUrl('/payment-overview');
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }).then((psObject => {
     this.pushService.subscribe(psObject);
    }));
  }
}
