import { Component, OnInit } from '@angular/core';
import { RavintolatService } from '../ravintolat.service'
import { Observable } from 'rxjs/Observable';
import {Ravintola} from '../ravintola'



@Component({
  selector: 'app-ravintolat',
  templateUrl: './ravintolat.component.html',
  styleUrls: ['./ravintolat.component.css']
})
export class RavintolatComponent implements OnInit {

  ravintolat=[];
  selectedRavintola:Ravintola;
  constructor(private ravintolatService:RavintolatService) { }

 // ngOnInit() {
//  }
//Hae (){
 // this.ravintolatService.haeLista().subscribe(
 //   (value) => this.result = value
//    );
////}
//}

ngOnInit() {
  /* var h1=new Person("Mikko", "mikko@mallikas.fi");
  this.persons=[{Nimi:"Anna", Email:"anna@malli"}, {Nimi:"Teemu", Email:"teemu@malli"}, h1];*/
  //this.ravintolat=this.ravintolatService.getRavintolat();
       this.ravintolatService.getRavintolatRest().then(ravintolat =>{ 
           this.ravintolat = ravintolat,
          console.dir(ravintolat); 
  });

  }
 onSelect(ravintola:Ravintola){
   this.selectedRavintola=ravintola;
   console.dir(this.selectedRavintola);
  }
  //addPerson(nimi:string, email: string){
  //  this.ravintolatService.createRavintola(nimi)
   // .then(person=>{
  //    this.ravintolat.push(ravintola);
  //    this.selectedRavintola=null;
  //  });
  }
