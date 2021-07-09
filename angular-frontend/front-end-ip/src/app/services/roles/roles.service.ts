import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Roles} from './roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  _allUrl = 'http://127.0.0.1:8000/api/vl/data/role/all/';
  _createUrl = 'http://127.0.0.1:8000/api/vl/data/role/create/';
  _url = 'http://127.0.0.1:8000/api/vl/data/role/detail';

  constructor(private http : HttpClient) { }


  getRoles(): Promise<any>{
    return this.http.get(this._allUrl).toPromise();
  }

  addRoles(data: Roles): Promise<any> {
    return this.http.post(this._createUrl, data).toPromise();
  }

  updateRoles(data: Roles): Promise<any>{
    return this.http.put(this._url + '/' + data.id + '/', data).toPromise();
  }

  deleteRoles(data: number): Promise<any>{
    return this.http.delete(this._url + '/' + data + '/').toPromise();
  }
}
