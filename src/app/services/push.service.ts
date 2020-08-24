import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private http: HttpClient) { }

  subscribe(psObject: PushSubscription) {
    this.http.post(environment.apiUrl + '/push/subscribe', {
      psObject: psObject
    }).toPromise();
  }
}
