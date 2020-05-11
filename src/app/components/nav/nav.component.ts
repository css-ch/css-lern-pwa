import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../_core/auth.service';
import {Router} from '@angular/router';
import {FavoriteService} from '../../services/favorite.service';
import {SizeServiceService} from '../../services/size-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  favoriteCount: number;

  constructor(private authService: AuthService,
              private router: Router,
              private favoriteService: FavoriteService,
              public sizeService: SizeServiceService) {
  }

  async ngOnInit() {
    this.favoriteService.favoriteState$.subscribe(async () => {
      this.favoriteCount = await this.favoriteService.getFavoriteCountByUuid(this.authService.getCurrentUserUid());
    });
    this.favoriteCount = await this.favoriteService.getFavoriteCountByUuid(this.authService.getCurrentUserUid());
  }

}
