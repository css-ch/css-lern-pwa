import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../_core/auth.service';
import {Router} from '@angular/router';
import {FavoriteService} from '../../services/favorite.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private favoriteService: FavoriteService) {
  }

  ngOnInit() {
  }

  private logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  getFavoriteCount() {
    return 0;
  }
}
