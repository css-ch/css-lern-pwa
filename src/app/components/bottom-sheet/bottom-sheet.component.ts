import {Component, Inject} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent {

  constructor(private bottomSheet: MatBottomSheetRef<BottomSheetComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
  }

  openReceipt() {
    console.log(this.data);
    const receipt = window.open(this.data.receipt_url, '_blank');
    receipt.focus();
  }

}
