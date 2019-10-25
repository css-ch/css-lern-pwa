import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-nav',
  templateUrl: './back-nav.component.html',
  styleUrls: ['./back-nav.component.scss']
})
export class BackNavComponent implements OnInit {

  @Input() pageTitle: String;
  @Input() pageIcon: String;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  public goBack() {
    this.location.back();
  }

}
