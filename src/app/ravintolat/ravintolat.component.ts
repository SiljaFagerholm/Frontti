import { Component, OnInit } from '@angular/core';
import { RavintolatService } from '../ravintolat.service'
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-ravintolat',
  templateUrl: './ravintolat.component.html',
  styleUrls: ['./ravintolat.component.css']
})
export class RavintolatComponent implements OnInit {

  result:string 
  constructor(private ravintolatService:RavintolatService) { }

  ngOnInit() {
  }
Hae (){
  this.ravintolatService.haeLista().subscribe(
    (value) => this.result = value
    );
}
}
