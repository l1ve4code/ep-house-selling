import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Transactions} from './transactions.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  _allUrl = 'http://127.0.0.1:8000/api/vl/data/sdelki/all/';
  _createUrl = 'http://127.0.0.1:8000/api/vl/data/sdelki/create/';
  _url = 'http://127.0.0.1:8000/api/vl/data/sdelki/detail';

  constructor(private http : HttpClient) { }

  getTransactions(): Promise<any>{
    return this.http.get(this._allUrl).toPromise();
  }

  addTransactions(data: Transactions): Promise<any> {
    return this.http.post(this._createUrl, data).toPromise();
  }

  updateTransactions(data: Transactions): Promise<any>{
    return this.http.put(this._url + '/' + data.id + '/', data).toPromise();
  }

  deleteTransactions(data: number): Promise<any>{
    return this.http.delete(this._url + '/' + data + '/').toPromise();
  }

  public saveToSessionTransactions(): any {
    this.http.get(this._allUrl).subscribe(
      data => {
        sessionStorage.setItem('transactions', JSON.stringify(data));
      }
    );
  }

}
