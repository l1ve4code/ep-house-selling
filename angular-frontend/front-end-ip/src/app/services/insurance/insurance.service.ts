import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Insurance} from './insurance.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  _allUrl = 'http://127.0.0.1:8000/api/vl/data/straxovoi/all/';
  _createUrl = 'http://127.0.0.1:8000/api/vl/data/straxovoi/create/';
  _url = 'http://127.0.0.1:8000/api/vl/data/straxovoi/detail';

  constructor(private http : HttpClient) { }

  getInsurance(): Promise<any>{
    return this.http.get(this._allUrl).toPromise();
  }

  addInsurance(data: Insurance): Promise<any> {
    return this.http.post(this._createUrl, data).toPromise();
  }

  updateInsurance(data: Insurance): Promise<any>{
    return this.http.put(this._url + '/' + data.id + '/', data).toPromise();
  }

  deleteInsurance(data: number): Promise<any>{
    return this.http.delete(this._url + '/' + data + '/').toPromise();
  }

  public saveToSessionInsurance(): any {
    this.http.get(this._allUrl).subscribe(
      data => {
        sessionStorage.setItem('insurance', JSON.stringify(data));
      }
    );
  }

}
