import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestMethod, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Ravintola} from './ravintola'

@Injectable()
export class RavintolatService {
  Ravintolat = []
  private actionUrl: string;
  private headers: Headers;
  constructor(private _http: Http) {
    this.actionUrl = 'http://localhost:8080/api/Ravintolat';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'text/plain');
    this.headers.append('Accept', 'application/json');
  }
  // public haeLista = (): Observable<string> => {
  //   let params: URLSearchParams = new URLSearchParams();
    
  //   let requestOptions = new RequestOptions();
  //   requestOptions.headers = this.headers;
  //   requestOptions.search = params;
  //   requestOptions.method = RequestMethod.Get;
  //   var result: Observable<string> = this._http.get(this.actionUrl, requestOptions)
  //     .map((response: Response) => (response.json()));
     
  //   return result;
  // }
  public getRavintolat():Ravintola[]{
    var r1=new Ravintola(1, "AnnuBrgr", 1, 2, 9, 9, "avaa", "sulkee", "Paras osoite 1" );
    var r2=new Ravintola(2, "BnnuBrgr", 1, 2, 2, 2, "avaa", "sulkee", "Paras osoite 2" );
    var r3=new Ravintola(3, "CnnuBrgr", 1, 2, 3, 3, "avaa", "sulkee", "Paras osoite 3" );
    var r4=new Ravintola(4, "DnnuBrgr", 1, 2, 4, 4, "avaa", "sulkee", "Paras osoite 4" );
    var r5=new Ravintola(5, "EnnuBrgr", 1, 2, 5, 5, "avaa", "sulkee", "Paras osoite 5" );
     
  this.Ravintolat=[r1,r2,r3,r4, r5];
  return this.Ravintolat;
}

  public getRavintolatRest():Promise<Ravintola[]>{
    return this._http.get(this.actionUrl)
                  .toPromise()
                  .then(response => response.json() as Ravintola[])
                  .catch(this.handleError);
   }
   public getRavintola(Id:number):Promise<Ravintola>{
    return this._http.get(this.actionUrl+"/"+Id)
                  .toPromise()
                  .then(response => response.json() as Ravintola)
                  .catch(this.handleError);
   }
  public createRavintola(Nimi:string): Promise<Ravintola> {
       return this._http.post(this.actionUrl, JSON.stringify({Nimi: name}), {headers: this.headers})
         .toPromise()
         .then(res => res.json() as Ravintola)
         .catch(this.handleError);
     }
   private handleError(error: any): Promise<any> {
       console.error('An error occurred', error); // for demo purposes only
       return Promise.reject(error.message || error);
     }
   }
