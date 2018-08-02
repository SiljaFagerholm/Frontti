import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JunkFoodComponent } from './junk-food/junk-food.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material';
import { MatListModule } from '@angular/material';

import 'hammerjs';
import '../polyfills';
import { GridComponent } from './grid/grid.component';
import { SelectComponent } from './select/select.component';
import { PagesComponent } from './pages/pages.component';
import { HakuComponent } from './haku/haku.component';
import { AlavalikkoComponent } from './alavalikko/alavalikko.component';
import { alavalikko2 } from './alavalikko/alavalikko.component';
import { HttpModule } from '@angular/http';
import { RavintolatService } from './ravintolat.service';
import { KayttajatService } from './kayttajat.service';
import { HttpClientModule } from '@angular/common/http';
import { RavintolatComponent } from './ravintolat/ravintolat.component';





@NgModule({
  declarations: [
    AppComponent,
    JunkFoodComponent,
    PopUpComponent,
    GridComponent,
    SelectComponent,
    PagesComponent,
    HakuComponent,
    AlavalikkoComponent,
    alavalikko2,
RavintolatComponent


  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, HttpClientModule, MatInputModule, RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/junk-food',
        pathMatch: 'full'
      },
      {
        path: 'junk-food',
        component: JunkFoodComponent
      },



    ]), MatTooltipModule, MatButtonModule, BrowserAnimationsModule, MatButtonModule,
    MatButtonToggleModule, MatGridListModule, MatSelectModule, MatPaginatorModule, MatAutocompleteModule,
    ReactiveFormsModule, MatBottomSheetModule, MatListModule
  ],
  entryComponents: [alavalikko2],
  providers: [RavintolatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
