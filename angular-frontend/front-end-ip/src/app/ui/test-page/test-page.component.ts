/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {Offers} from '../../services/offers/offers.model';
import {ActivitiesService} from '../../services/activities/activities.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  page = 1;
  pageSize =3;
  items = [];

  ngOnInit(): void {
  }

  constructor() {
    for(let i = 1; i <= 100; i++){
      this.items.push({Name: 'Shop ' + i});
    }
  }
}
