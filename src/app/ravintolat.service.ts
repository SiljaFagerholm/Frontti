import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestMethod, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RavintolatService {
  private actionUrl: string;
  private headers: Headers;
  constructor(private _http: Http) {
    this.actionUrl = 'http://localhost:8080/api/Ravintolat';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'text/plain');
    this.headers.append('Accept', 'application/json');
  }
  public haeLista = (): Observable<string> => {
    let params: URLSearchParams = new URLSearchParams();
    
    let requestOptions = new RequestOptions();
    requestOptions.headers = this.headers;
    requestOptions.search = params;
    requestOptions.method = RequestMethod.Get;
    var result: Observable<string> = this._http.get(this.actionUrl, requestOptions)
      .map((response: Response) => (response.json()));
     
    return result;
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}