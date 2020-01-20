import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_core/auth.service';
import {ToastService} from '../services/toast.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.scss']
})
export class ChangeUsernameComponent implements OnInit {

  public username = '';

  constructor(private auth: AuthService,
              private toastService: ToastService,
              private router: Router) { }

  ngOnInit() {
    this.username = this.auth.getCurrentUser().displayName;
  }

  changeUsername() {
    this.auth.changeUsername(this.username);
    this.toastService.createToastMessage('Username wurde erfolgreich geändert');
    this.router.navigateByUrl('/settings');
  }
}
