import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {AuthService} from '../../_core/auth.service';
import {PersonalDataService} from '../../services/personal.data.service';
import {FavoriteService} from '../../services/favorite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  innerWidth: any;

  @Input() products: Product[] = [];

  constructor(private auth: AuthService,
              private userService: PersonalDataService,
              private favoriteService: FavoriteService,
              private router: Router) {
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

  }

  async toggleFavorite(product: Product) {
    await this.favoriteService.toggleFavorite(await this.userService.getPersonalDataByUID(this.auth.getCurrentUserUid()), product);
  }

  showProductDetails(product: Product) {
    this.router.navigateByUrl('product-detail', {state: {data: {product: product}}});
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
