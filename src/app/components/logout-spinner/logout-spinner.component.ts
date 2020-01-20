import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout-spinner',
  templateUrl: './logout-spinner.component.html',
  styleUrls: ['./logout-spinner.component.scss']
})
export class LogoutSpinnerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 2500);
  }

}
