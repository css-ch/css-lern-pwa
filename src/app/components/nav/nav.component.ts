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

  favoriteCount: number;

  constructor(private authService: AuthService,
              private router: Router,
              private favoriteService: FavoriteService) {
  }

  async ngOnInit() {
    this.favoriteCount = await this.favoriteService.getFavoriteCountByUuid(this.authService.getCurrentUserUid());
  }

}
