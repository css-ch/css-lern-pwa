import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {PersonalData} from '../models/personal-data';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  async pay(amount: number, stripeCustomerId: string) {
    this.http.post(environment.apiUrl + `/payment/make-payment/${amount}/${stripeCustomerId}`, {}).toPromise();
  }

  createCustomer(userData: PersonalData, firebaseUserData: User) {
    this.http.post(environment.apiUrl + '/payment/create-customer', {
      user: userData,
      email: firebaseUserData.email
    }).toPromise();
  }

  getPayments(stripeCustomerId: string) {
    return this.http.get<any>(environment.apiUrl + `/payment/get-payments/${stripeCustomerId}`).toPromise();
  }

}
