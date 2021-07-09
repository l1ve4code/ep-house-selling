import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tariffs} from './tariffs.model';

@Injectable({
  providedIn: 'root'
})
export class TariffsService {

  _allUrl = 'http://127.0.0.1:8000/api/vl/data/tariphy/all/';
  _createUrl = 'http://127.0.0.1:8000/api/vl/data/tariphy/create/';
  _url = 'http://127.0.0.1:8000/api/vl/data/tariphy/detail';

  constructor(private http : HttpClient) { }

  getTariffs(): Promise<any>{
    return this.http.get(this._allUrl).toPromise();
  }

  addTariffs(data: Tariffs): Promise<any> {
    return this.http.post(this._createUrl, data).toPromise();
  }

  updateTariffs(data: Tariffs): Promise<any>{
    return this.http.put(this._url + '/' + data.id + '/', data).toPromise();
  }

  deleteTariffs(data: number): Promise<any>{
    return this.http.delete(this._url + '/' + data + '/').toPromise();
  }

}
