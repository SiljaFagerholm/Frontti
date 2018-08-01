import { Component, OnInit } from '@angular/core';
import { RavintolatService } from '../ravintolat.service'


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {


  result;//:string 
  constructor(private ravintolatService:RavintolatService) { }

  ngOnInit() {
  }
  Hae (){
    this.ravintolatService.haeLista().subscribe(
      (value) => {this.result = value;
      console.dir(this.result);}
      );
  }
}
