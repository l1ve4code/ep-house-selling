import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Activities} from './activities.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  _allUrl = 'http://127.0.0.1:8000/api/vl/data/operahii/all/';
  _createUrl = 'http://127.0.0.1:8000/api/vl/data/operahii/create/';
  _url = 'http://127.0.0.1:8000/api/vl/data/operahii/detail';

  constructor(private http : HttpClient) { }


  getActivities(): Promise<any>{
    return this.http.get(this._allUrl).toPromise();
  }

  addActivities(data: Activities): Promise<any> {
    return this.http.post(this._createUrl, data).toPromise();
  }

  updateActivities(data: Activities): Promise<any>{
    return this.http.put(this._url + '/' + data.id + '/', data).toPromise();
  }

  deleteActivities(data: number): Promise<any>{
    return this.http.delete(this._url + '/' + data + '/').toPromise();
  }
}
