import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../_core/auth.service';
import {Router} from '@angular/router';
import * as bcrypt from 'bcrypt';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = {email: '', password: '', displayname: ''};

  constructor(private authService: AuthService) { }

  async ngOnInit() {
  }

  public login() {
    this.authService.loginWithEmailAndPassword(this.user);
  }

}
