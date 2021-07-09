/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OffersService} from '../../services/offers/offers.service';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit {

  formAddData: FormGroup;

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.initForm();
  }

  sendData(): void{
    this.offersService.addOffers(this.formAddData.value);
  }

  initForm(): void {
    this.formAddData = new FormGroup({
      object_type: new FormControl('', Validators.required),
      id_rayona: new FormControl('', Validators.required),
      id_goroda: new FormControl('', Validators.required),
      adres: new FormControl('', Validators.required),
      kolvo_etashei: new FormControl('', Validators.required),
      etash: new FormControl('', Validators.required),
      kolvo_komnat: new FormControl('', Validators.required),
      plozhad: new FormControl('', Validators.required),
      xoz_postroyki: new FormControl('', Validators.required),
      opisanie: new FormControl('', Validators.required),
      stoimost: new FormControl('', Validators.required),
      id_prodavca: new FormControl('', Validators.required),
      actualnost: new FormControl('', Validators.required),
    });
  }

}
