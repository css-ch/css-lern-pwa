import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_core/auth.service';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = {email: '', password: '', displayname: ''};

  constructor(private authService: AuthService,
              private router: Router) {
  }

  async ngOnInit() {
    // logout if refresh happened
    this.authService.logout();
  }

  public login() {
    this.authService.loginWithEmailAndPassword(this.user);
  }

  public register() {
    this.router.navigateByUrl('registration');
  }

}
