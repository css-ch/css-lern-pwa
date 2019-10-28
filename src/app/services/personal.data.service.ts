import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonalData} from "../models/personal-data";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {

  constructor(private http: HttpClient) {
  }

  async createPersonalData(personalData: PersonalData) {
    await this.http.post(environment.apiUrl + '/personal-data/create', personalData).toPromise();
  }

  async getPersonalDataByUID(uid: string) {
    return this.http.get<PersonalData>(environment.apiUrl + '/personal-data/' + uid).toPromise();
  }
}
