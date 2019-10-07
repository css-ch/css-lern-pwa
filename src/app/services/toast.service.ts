import {Injectable, NgModule} from '@angular/core';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar} from '@angular/material';

@NgModule({
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  public createToastMessage(message: string) {
    this.snackBar.open(message);
    setTimeout(() => {
      this.snackBar.dismiss();
    }, 2500);
  }

}
