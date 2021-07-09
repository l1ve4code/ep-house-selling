/* tslint:disable:no-trailing-whitespace */
import {Component, Input, OnInit} from '@angular/core';
import {OffersService} from '../../services/offers/offers.service';
import {Offers} from '../../services/offers/offers.model';
import {User} from '../../services/user/user.model';
import {Areas} from '../../services/areas/areas.model';
import {Cities} from '../../services/cities/cities.model';
import {AreasService} from '../../services/areas/areas.service';
import {CitiesService} from '../../services/cities/cities.service';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  page = 1;

  offers: Offers[] = [];

  stoimost = 0;

  searchField: any = '';

  constructor(private offersService: OffersService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.initData();
    if (!this.userService.getToken()){
      this.router.navigate(['/']);
    }
  }

  test(){
    console.log(this.offers);
  }

  changeCostIncrease(){
    this.stoimost = 0;
  }
  changeCostUncrease(){
    this.stoimost = 1;
  }

  async initData() {
    try {
      this.offers = await this.offersService.getOffers();
    } catch (error) {
      console.log(error);
    }
  }


}
