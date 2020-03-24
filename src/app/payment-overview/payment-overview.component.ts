import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../services/payment.service';
import {AuthService} from '../_core/auth.service';
import {PersonalDataService} from '../services/personal.data.service';

@Component({
  selector: 'app-payment-overview',
  templateUrl: './payment-overview.component.html',
  styleUrls: ['./payment-overview.component.scss']
})
export class PaymentOverviewComponent implements OnInit {

  public payments = [];

  constructor(private paymentService: PaymentService,
              private authService: AuthService,
              private personalDataService: PersonalDataService) {
  }

  async ngOnInit() {
    this.personalDataService.getPersonalDataByUID(this.authService.getCurrentUserUid()).then(async user => {
      this.paymentService.getPayments(user.stripeId).then((payments => {
        this.payments = payments.data;
      }));
    });
  }

  getPaymentDate(created: any) {
    const date = new Date(created * 1000);
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
  }

  openReceipt(receipt_url: any) {
    const receipt = window.open(receipt_url, '_blank');
    receipt.focus();
  }
}
