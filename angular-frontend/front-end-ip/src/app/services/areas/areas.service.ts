import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Areas} from './areas.model';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  _allUrl = 'http://127.0.0.1:8000/api/vl/data/rayoni/all/';
  _createUrl = 'http://127.0.0.1:8000/api/vl/data/rayoni/create/';
  _url = 'http://127.0.0.1:8000/api/vl/data/rayoni/detail';

  constructor(private http : HttpClient) { }


  getAreas(): Promise<any>{
    return this.http.get(this._allUrl).toPromise();
  }

  addAreas(data: Areas): Promise<any> {
    return this.http.post(this._createUrl, data).toPromise();
  }

  updateAreas(data: Areas): Promise<any>{
    return this.http.put(this._url + '/' + data.id + '/', data).toPromise();
  }

  deleteAreas(data: number): Promise<any>{
    return this.http.delete(this._url + '/' + data + '/').toPromise();
  }

}
