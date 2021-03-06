import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../_core/auth.service';
import {User} from '../models/user';
import {PersonalData} from '../models/personal-data';
import {ToastService} from '../services/toast.service';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {PersonalDataService} from '../services/personal.data.service';
import {PaymentService} from '../services/payment.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  userdata: User = {email: '', password: '', displayname: ''};
  personalData: PersonalData = {fullname: '', address: '', postcode: '', city: '', uid: '', stripeId: ''};
  userListRef: AngularFireList<PersonalData>;

  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private toastService: ToastService,
              private afDb: AngularFireDatabase,
              private personalDataService: PersonalDataService,
              private paymentService: PaymentService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  public registerUser() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
      this.authService.createUserWithEmailAndPassword(this.userdata).then(() => {
        this.personalData.uid = this.authService.getCurrentUserUid();
        this.personalDataService.createPersonalData(this.personalData).then(async () => {
          this.paymentService.createCustomer(await this.personalDataService.getPersonalDataByUID(this.personalData.uid),
            this.authService.getCurrentUser());
        });

      });
    } else {
      this.toastService.createToastMessage('Alle Felder müssen gefüllt sein!');
    }
  }
}
