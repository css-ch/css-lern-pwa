import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonalData} from '../models/personal-data';
import {environment} from '../../environments/environment';
import {Product} from '../models/product';
import {Favorite} from '../models/favorite';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) {
  }

  public favoriteState$: Subject<void> = new Subject<void>();

  async toggleFavorite(user: PersonalData, product: Product) {
    const data: any = {
      user: user,
      product: product
    };
    await this.http.post(environment.apiUrl + '/favorite/toggle-favorite', data).toPromise();
    this.favoriteState$.next();
  }

  async getFavoritesByUuid(uuid: string) {
    return await this.http.get<Favorite[]>(environment.apiUrl + '/favorite/' + uuid).toPromise();
  }

  async getFavoriteCountByUuid(uuid: string) {
    return await this.http.get<number>(environment.apiUrl + '/favorite/favorite-count/' + uuid).toPromise();
  }

}
