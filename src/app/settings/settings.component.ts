import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../_core/auth.service';
import {PaymentService} from '../services/payment.service';
import {PersonalDataService} from '../services/personal.data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService,
              private paymentService: PaymentService,
              private userService: PersonalDataService) {
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
    this.paymentService.createCustomer(await this.userService.getPersonalDataByUID(this.authService.getCurrentUserUid()),
      this.authService.getCurrentUser());
  }
}
