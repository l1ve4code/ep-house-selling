/* tslint:disable:no-string-literal variable-name quotemark no-trailing-whitespace */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Transactions} from '../transactions/transactions.model';
import {User} from './user.model';
import {OffersService} from '../offers/offers.service';
import {TransactionsService} from '../transactions/transactions.service';
import {InsuranceService} from '../insurance/insurance.service';

// noinspection RedundantIfStatementJS
@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url = 'http://127.0.0.1:8000/api/vl/data/polzovateli/detail';
  _allUrl = 'http://127.0.0.1:8000/api/vl/data/polzovateli/all/';

  private httpOptions: any;

  private token: string;
  private username: string;
  private name: string;
  private surname: string;
  private role: string;

  private errors: any = [];

  constructor(private http: HttpClient, private router: Router, private offersService: OffersService,
              private transactionsService: TransactionsService,
              private insuranceService: InsuranceService) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  public login(user): any {
    this.http.post('http://127.0.0.1:8000/user/login', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        console.log(this.token);
      },
      err => {
        this.errors = err['error'];
        console.log(this.errors);
      }
    );
  }

  public logout(): void {
    this.token = null;
    this.username = null;
    this.name = null;
    this.surname = null;
    this.role = null;
    sessionStorage.clear();
  }

  public getUsers(): Promise<any>{
    return this.http.get(this._allUrl).toPromise();
  }

  public updateUsers(id: number, data: User): Promise<any>{
    return this.http.put(this._url + '/' + id + '/', data).toPromise();
  }

  private updateData(token): void {
    this.token = token;
    this.errors = [];

    try{
      const token_parts = this.token.split(/\./);
      const token_decoded = JSON.parse(window.atob(token_parts[1]));
      this.username = token_decoded.login;
      this.role = token_decoded.role;
      this.name = token_decoded.name;
      this.surname = token_decoded.surname;

      sessionStorage.setItem("username", this.username);
      sessionStorage.setItem("role", this.role);
      sessionStorage.setItem("name", this.name);
      sessionStorage.setItem("surname", this.surname);
      sessionStorage.setItem("token", this.token);

      this.offersService.saveToSessionOffers();
      this.transactionsService.saveToSessionTransactions();
      this.insuranceService.saveToSessionInsurance();

      if (this.tokenExists()){
        this.router.navigate(['/']);
      }

    }
    catch (e) {
      console.log(e);
    }
  }


  public getToken(): string {
    return sessionStorage.getItem("token");
  }

  public getUsername(): string {
    return sessionStorage.getItem("username");
  }

  public getName(): string {
    return sessionStorage.getItem("name");
  }

  public getSurname(): string {
    return sessionStorage.getItem("surname");
  }

  public getRole(): string {
    switch (sessionStorage.getItem("role")) {
      case "1": {
        return "User";
      }
      case "2": {
        return "Seller";
      }
      case "4": {
        return "Admin";
      }
    }
  }

  public tokenExists(): boolean{
    if (this.token){
      return true;
    }
    return false;
  }

}

