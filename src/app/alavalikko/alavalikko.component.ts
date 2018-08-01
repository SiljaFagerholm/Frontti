import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-alavalikko',
  templateUrl: './alavalikko.component.html',
  styleUrls: ['./alavalikko.component.css']
})



export class AlavalikkoComponent  {
  constructor(private bottomSheet: MatBottomSheet) {}



  openBottomSheet(): void {
    this.bottomSheet.open(alavalikko2);}

  
  }
@Component({
  selector: 'alavalikko2',
  templateUrl: './alavalikko2.html',
  
})
export class alavalikko2 implements OnInit {
  constructor(private bottomSheetRef: MatBottomSheetRef<alavalikko2>) {}


  ngOnInit(){}
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();

    
  }
}

  
