import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../_core/auth.service';
import {User} from '../models/user';
import {PersonalData} from '../models/personal-data';
import {ToastService} from '../services/toast.service';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {PersonalDataService} from '../services/personal.data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  userdata: User = {email: '', password: '', displayname: ''};
  personalData: PersonalData = {fullname: '', address: '', postcode: '', city: '', uid: ''};
  userListRef: AngularFireList<PersonalData>;

  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private toastService: ToastService,
              private afDb: AngularFireDatabase,
              private personalDataService: PersonalDataService) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  public registerUser() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      this.authService.createUserWithEmailAndPassword(this.userdata).then(() => {
        this.personalData.uid = this.authService.getCurrentUserUid();
        this.personalDataService.createPersonalData(this.personalData);

      });
    } else {
      this.toastService.createToastMessage('Alle Felder müssen gefüllt sein!');
    }
  }
}
