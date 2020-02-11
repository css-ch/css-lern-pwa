import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeServiceService {

  private isPhone: boolean;

  constructor() {
  }

  setIsPhone(val: boolean) {
    this.isPhone = val;
  }

  getIsPhone() {
    return this.isPhone;
  }

}
