import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Offers} from './offers.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  _allUrl = 'http://127.0.0.1:8000/api/vl/data/predlozheniya/all/';
  _createUrl = 'http://127.0.0.1:8000/api/vl/data/predlozheniya/create/';
  _url = 'http://127.0.0.1:8000/api/vl/data/predlozheniya/detail';

  constructor(private http : HttpClient) { }

  getOffers(): Promise<any>{
    return this.http.get(this._allUrl).toPromise();
  }

  addOffers(data: Offers): Promise<any> {
    return this.http.post(this._createUrl, data).toPromise();
  }

  updateOffers(data: Offers): Promise<any>{
    return this.http.put(this._url + '/' + data.id + '/', data).toPromise();
  }

  deleteOffers(data: number): Promise<any>{
    return this.http.delete(this._url + '/' + data + '/').toPromise();
  }

  public saveToSessionOffers(): any {
    this.http.get(this._allUrl).subscribe(
      data => {
        sessionStorage.setItem('offers', JSON.stringify(data));
      }
    );
  }

}
