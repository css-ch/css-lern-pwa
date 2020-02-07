import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastService} from '../services/toast.service';

@Component({
  selector: 'app-checkout-loading',
  templateUrl: './checkout-loading.component.html',
  styleUrls: ['./checkout-loading.component.scss']
})
export class CheckoutLoadingComponent implements OnInit {

  public accepted = false;

  constructor(private router: Router,
              private toastService: ToastService) {
  }

  ngOnInit() {
    setTimeout(() => {
      document.body.style.backgroundColor = '#38b825';
      this.accepted = true;
      setTimeout(() => {
        document.body.style.backgroundColor = 'white';
        this.toastService.createToastMessage('Ihr Einkauf wurde getätigt');
        this.router.navigateByUrl('/home');
      }, 1500);
    }, 2500);
  }

}
