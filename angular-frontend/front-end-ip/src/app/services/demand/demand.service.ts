import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Demand} from './demand.model';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  _allUrl = 'http://127.0.0.1:8000/api/vl/data/spros/all/';
  _createUrl = 'http://127.0.0.1:8000/api/vl/data/spros/create/';
  _url = 'http://127.0.0.1:8000/api/vl/data/spros/detail';

  constructor(private http : HttpClient) { }

  getDemand(): Promise<any>{
    return this.http.get(this._allUrl).toPromise();
  }

  addDemand(data: Demand): Promise<any> {
    return this.http.post(this._createUrl, data).toPromise();
  }

  updateDemand(data: Demand): Promise<any>{
    return this.http.put(this._url + '/' + data.id + '/', data).toPromise();
  }

  deleteDemand(data: number): Promise<any>{
    return this.http.delete(this._url + '/' + data + '/').toPromise();
  }

}
