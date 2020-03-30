import {Component} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {

  constructor(private bottomSheet: MatBottomSheetRef<BottomSheetComponent>) {
  }

  openReceipt(receipt_url: any) {
    const receipt = window.open(receipt_url, '_blank');
    receipt.focus();
  }

}
