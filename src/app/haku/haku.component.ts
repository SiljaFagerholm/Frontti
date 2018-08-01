import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-haku',
  templateUrl: './haku.component.html',
  styleUrls: ['./haku.component.css']
})
export class HakuComponent implements OnInit {
  myControl = new FormControl();
  
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable <string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
