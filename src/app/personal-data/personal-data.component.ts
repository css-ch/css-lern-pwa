import {Component, OnInit} from '@angular/core';
import {PersonalData} from "../models/personal-data";
import {PersonalDataService} from "../services/personal.data.service";
import {AuthService} from "../_core/auth.service";
import {ToastService} from "../services/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  public personalData: PersonalData = {fullname: '', city: '', postcode: '', address: '', uid: ''};

  constructor(private personalDataService: PersonalDataService,
              private authService: AuthService,
              private toastService: ToastService,
              private router: Router) {
  }

  async ngOnInit() {
    this.personalData = await this.personalDataService.getPersonalDataByUID(this.authService.getCurrentUser().uid);
  }

  public async changePersonalData() {
    await this.personalDataService.changePersonalData(this.personalData).then(() => {
      this.toastService.createToastMessage('Daten erfolgreich geändert.');
      this.router.navigateByUrl('settings');
    });
  }

}
