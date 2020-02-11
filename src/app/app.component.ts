import {Component, HostListener, OnInit} from '@angular/core';

import {AuthService} from './_core/auth.service';
import {SizeServiceService} from './services/size-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private sizeService: SizeServiceService) {
  }

  ngOnInit(): void {
    this.onResize({});
    this.authService.useDeviceLang();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth >= 1280) {
      this.sizeService.setIsPhone(false);
    } else {
      this.sizeService.setIsPhone(true);
    }
  }

}
