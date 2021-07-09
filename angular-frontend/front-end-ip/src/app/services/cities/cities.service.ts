import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cities} from './cities.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  _allUrl = 'http://127.0.0.1:8000/api/vl/data/gorod/all/';
  _createUrl = 'http://127.0.0.1:8000/api/vl/data/gorod/create/';
  _url = 'http://127.0.0.1:8000/api/vl/data/gorod/detail';

  constructor(private http : HttpClient) { }


  getCities(): Promise<any>{
    return this.http.get(this._allUrl).toPromise();
  }

  addCities(data: Cities): Promise<any> {
    return this.http.post(this._createUrl, data).toPromise();
  }

  updateCities(data: Cities): Promise<any>{
    return this.http.put(this._url + '/' + data.id + '/', data).toPromise();
  }

  deleteCities(data: number): Promise<any>{
    return this.http.delete(this._url + '/' + data + '/').toPromise();
  }

}
