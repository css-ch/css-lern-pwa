import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {AuthService} from "../_core/auth.service";
import {PersonalData} from "../models/personal-data";
import {Observable} from "rxjs";

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  public userData: Observable<PersonalData[]>;
  public userDataRef: AngularFireList<PersonalData>;

  constructor(private db: AngularFireDatabase,
              private authService: AuthService) { }

  ngOnInit() {
    this.userDataRef = this.db.list('users', ref => ref
      .orderByChild('uid')
      .equalTo(this.authService.getCurrentUserUid())
    );
    this.userData = this.userDataRef.valueChanges();
  }

}
