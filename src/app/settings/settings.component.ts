import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../_core/auth.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  public changeUsername() {
    this.router.navigateByUrl('/changeUsername');
  }

  public changePassword() {
    this.authService.changePassword(this.authService.getCurrentUser().email);
  }

  public changePersonalData() {
    this.router.navigateByUrl('/personal-data');
  }
}
