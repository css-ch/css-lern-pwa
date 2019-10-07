import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_core/auth.service';
import {Router} from '@angular/router';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private authService: AuthService,
              private router: Router,
              private toastService: ToastService) {
  }

  public logout() {
    this.authService.logout();
    this.toastService.createToastMessage('Logout erfolgreich');
    this.router.navigateByUrl('/login');
  }

}
