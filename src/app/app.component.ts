import {Component, OnInit} from '@angular/core';

import {FirebaseAuth} from "@angular/fire";
import {AuthService} from "./_core/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.useDeviceLang();
  }



}
