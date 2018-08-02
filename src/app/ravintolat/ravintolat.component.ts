import { Component, OnInit } from '@angular/core';
import { RavintolatService } from '../ravintolat.service'
import { Observable } from 'rxjs/Observable';
import {Ravintola} from '../ravintola'
import {RavintolaKommentti} from '../ravintolakommentti';
import {RavintolaKommentitService} from '../kommentit.service';




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
            console.dir(ravintolat);

          });
            
          // for (var i= 0, len = ravintolat.length; i++;){
          //   var str = ravintolat.; 
          //   console.log("str : " + str );  
          // }
            // var str = arr.join(", "); 
            // console.log("str : " + str );  
          
            // var str = arr.join(" + "); 
            // console.log("str : " + str );
            // let ripuli: string = ravintolat.map (function(item) {
            //   return {
            //       "<mat-grid-tile>" + item.RavintolanNimi+ "</mat-grid-tile>"
            //     }
            //     console.dir (this.ripuli);
            //     console.log("wongwong");
            // })

           
  };
         
  onSelect(ravintola:Ravintola){
    this.selectedRavintola=ravintola;
    console.dir(this.selectedRavintola);
  }}

  export class KommentitComponent implements OnInit {
  
    ravintolakommentti=[];
    selectedKommentti:RavintolaKommentti;
    constructor(private ravintolaKommenttiService:RavintolaKommentitService) { }
    
    ngOnInit() {
    

  this.ravintolaKommenttiService.getRavintolaKommentitRest().then(ravintolakommentti =>{ 
    this.ravintolakommentti = ravintolakommentti,
    console.dir(ravintolakommentti); 
   
  
  });
    }
 onSelect(ravintolakommentti:RavintolaKommentti){
   this.selectedKommentti=ravintolakommentti;
   console.dir(this.selectedKommentti);
 
  //addPerson(nimi:string, email: string){
  //  this.ravintolatService.createRavintola(nimi)
   // .then(person=>{
  //    this.ravintolat.push(ravintola);
  //    this.selectedRavintola=null;
  //  });
  }
  }
