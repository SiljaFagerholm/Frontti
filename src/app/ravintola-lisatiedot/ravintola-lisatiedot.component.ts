import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Ravintola} from '../ravintola';
import {RavintolatService} from '../ravintolat.service';

@Component({
  selector: 'app-ravintola-lisatiedot',
  templateUrl: './ravintola-lisatiedot.component.html',
  styleUrls: []
})
export class RavintolaEditComponent implements OnInit {
  ravintola:Ravintola;
  constructor(private ravintolaservice:RavintolatService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
      var id:number;
      id =  params['id'];
      if (id) {
        this.ravintolaservice.getRavintola(id)
    .then(ravintola=>{
      this.ravintola= ravintola;
    });
      }
      else {
        this.ravintola=null;
      }
    });

  }

}