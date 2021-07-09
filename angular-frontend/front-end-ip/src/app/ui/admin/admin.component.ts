/* tslint:disable:no-trailing-whitespace max-line-length quotemark */
import { Component, OnInit } from '@angular/core';
import {Activities} from '../../services/activities/activities.model';
import {Areas} from '../../services/areas/areas.model';
import {Cities} from '../../services/cities/cities.model';
import {Demand} from '../../services/demand/demand.model';
import {Insurance} from '../../services/insurance/insurance.model';
import {Offers} from '../../services/offers/offers.model';
import {Roles} from '../../services/roles/roles.model';
import {Tariffs} from '../../services/tariffs/tariffs.model';
import {Transactions} from '../../services/transactions/transactions.model';
import {ActivitiesService} from '../../services/activities/activities.service';
import {AreasService} from '../../services/areas/areas.service';
import {CitiesService} from '../../services/cities/cities.service';
import {DemandService} from '../../services/demand/demand.service';
import {InsuranceService} from '../../services/insurance/insurance.service';
import {OffersService} from '../../services/offers/offers.service';
import {RolesService} from '../../services/roles/roles.service';
import {TariffsService} from '../../services/tariffs/tariffs.service';
import {TransactionsService} from '../../services/transactions/transactions.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // tslint:disable-next-line:no-trailing-whitespace

  pageNaming = 1

  modalReference;

  Object = Object;

  activities: Activities[] = [];
  areas: Areas[] = [];
  cities: Cities[] = [];
  demands: Demand[] = [];
  insurances: Insurance[] = [];
  offers: Offers[] = [];
  roles: Roles[] = [];
  tariffs: Tariffs[] = [];
  transactions: Transactions[] = [];

  naming = []

  dataEditDataForm: FormGroup;
  dataAddDataForm: FormGroup;

  constructor(private activitiesService: ActivitiesService,
              private areasService: AreasService,
              private citiesService: CitiesService,
              private demandsService: DemandService,
              private insurancesService: InsuranceService,
              private offersService: OffersService,
              private rolesService: RolesService,
              private tariffsService: TariffsService,
              private transactionsService: TransactionsService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initData();
  }

  open(content, index: number) {
    switch (index) {
      case 1:
        this.dataAddDataForm = new FormGroup({
          id: new FormControl('', Validators.required),
          name: new FormControl('' , Validators.required),
        });
        break;
      case 2:
        this.dataAddDataForm = new FormGroup({
          id: new FormControl('' , Validators.required),
          name: new FormControl('' , Validators.required),
        });
        break;
      case 3:
        this.dataAddDataForm = new FormGroup({
          id: new FormControl('' , Validators.required),
          name: new FormControl('' , Validators.required),
        });
        break;
      case 4:
        this.dataAddDataForm = new FormGroup({
          id: new FormControl('' , Validators.required),
          object_type: new FormControl('' , Validators.required),
          kolvo_etashei_ot: new FormControl('' , Validators.required),
          kolvo_etashei_do: new FormControl('' , Validators.required),
          etash_ot: new FormControl('' , Validators.required),
          etash_do: new FormControl('' , Validators.required),
          kolvo_komnat_ot: new FormControl('' , Validators.required),
          kolvo_komnat_do: new FormControl('' , Validators.required),
          ploshad_ot: new FormControl('' , Validators.required),
          ploshad_do: new FormControl('' , Validators.required),
          stoimost_ot: new FormControl('' , Validators.required),
          stoimost_do: new FormControl('' , Validators.required),
          actualnost: new FormControl('' , Validators.required),
          id_rayona: new FormControl('' , Validators.required),
          id_goroda: new FormControl('' , Validators.required),
          id_client: new FormControl('' , Validators.required),
        });
        break;
      case 5:
        this.dataAddDataForm = new FormGroup({
          id: new FormControl('' , Validators.required),
          id_predlozhenia: new FormControl('' , Validators.required),
          id_rieltora: new FormControl('' , Validators.required),
          id_tarifa: new FormControl('' , Validators.required),
          kolvo_let: new FormControl('' , Validators.required),
        });
        break;
      case 6:
        this.dataAddDataForm = new FormGroup({
          id: new FormControl('' , Validators.required),
          object_type: new FormControl('' , Validators.required),
          id_rayona: new FormControl('' , Validators.required),
          id_goroda: new FormControl('' , Validators.required),
          adres: new FormControl('' , Validators.required),
          kolvo_etashei: new FormControl('' , Validators.required),
          etash: new FormControl('' , Validators.required),
          kolvo_komnat: new FormControl('' , Validators.required),
          plozhad: new FormControl('' , Validators.required),
          xoz_postroyki: new FormControl('' , Validators.required),
          opisanie: new FormControl('' , Validators.required),
          stoimost: new FormControl('' , Validators.required),
          id_prodavca: new FormControl('' , Validators.required),
          actualnost: new FormControl('' , Validators.required),
        });
        break;
      case 7:
        this.dataAddDataForm = new FormGroup({
          id: new FormControl('' , Validators.required),
          name: new FormControl('' , Validators.required),
        });
        break;
      case 8:
        this.dataAddDataForm = new FormGroup({
          id: new FormControl('' , Validators.required),
          name: new FormControl('' , Validators.required),
          stavka_polgoda: new FormControl('' , Validators.required),
          stavka_god: new FormControl('' , Validators.required),
          stavka_tri: new FormControl('' , Validators.required),
        });
        break;
      case 9:
        this.dataAddDataForm = new FormGroup({
          id: new FormControl('' , Validators.required),
          id_kontrakta: new FormControl('' , Validators.required),
          id_pokypatelia: new FormControl('' , Validators.required),
          date: new FormControl('' , Validators.required),
          komissionie_agenty: new FormControl('' , Validators.required),
          proc_rieltora: new FormControl('' , Validators.required),
          id_operachii: new FormControl('' , Validators.required),
        });
        break;
    }
    this.modalReference = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  addEvent(index: number): void {
    switch (index) {
      case 1:
        this.activitiesService.addActivities(this.dataAddDataForm.value);
        break;
      case 2:
        this.areasService.addAreas(this.dataAddDataForm.value);
        break;
      case 3:
        this.citiesService.addCities(this.dataAddDataForm.value);
        break;
      case 4:
        this.demandsService.addDemand(this.dataAddDataForm.value);
        break;
      case 5:
        this.insurancesService.addInsurance(this.dataAddDataForm.value);
        break;
      case 6:
        this.offersService.addOffers(this.dataAddDataForm.value);
        break;
      case 7:
        this.rolesService.addRoles(this.dataAddDataForm.value);
        break;
      case 8:
        this.tariffsService.addTariffs(this.dataAddDataForm.value);
        break;
      case 9:
        this.transactionsService.addTransactions(this.dataAddDataForm.value);
        break;
    }
    this.modalReference.close();
    this.initData();
  }

  editEvent(index: number): void{
    switch (index) {
      case 1:
        this.activitiesService.updateActivities(this.dataEditDataForm.value);
        break;
      case 2:
        this.areasService.updateAreas(this.dataEditDataForm.value);
        break;
      case 3:
        this.citiesService.updateCities(this.dataEditDataForm.value);
        break;
      case 4:
        this.demandsService.updateDemand(this.dataEditDataForm.value);
        break;
      case 5:
        this.insurancesService.updateInsurance(this.dataEditDataForm.value);
        break;
      case 6:
        this.offersService.updateOffers(this.dataEditDataForm.value);
        break;
      case 7:
        this.rolesService.updateRoles(this.dataEditDataForm.value);
        break;
      case 8:
        this.tariffsService.updateTariffs(this.dataEditDataForm.value);
        break;
      case 9:
        this.transactionsService.updateTransactions(this.dataEditDataForm.value);
        break;
    }
    this.modalReference.close();
    this.initData();
  }

  editData(editMeta, index: number, id: number): void {
    // @ts-ignore
    switch (index) {
      case 1:
        this.dataEditDataForm = new FormGroup({
          id: new FormControl(this.naming[0].table.find(x => x.id === id).id, Validators.required),
          name: new FormControl(this.naming[0].table.find(x => x.id === id).name, Validators.required),
        });
        break;
      case 2:
        this.dataEditDataForm = new FormGroup({
          id: new FormControl(this.naming[1].table.find(x => x.id === id).id, Validators.required),
          name: new FormControl(this.naming[1].table.find(x => x.id === id).name, Validators.required),
        });
        break;
      case 3:
        this.dataEditDataForm = new FormGroup({
          id: new FormControl(this.naming[2].table.find(x => x.id === id).id, Validators.required),
          name: new FormControl(this.naming[2].table.find(x => x.id === id).name, Validators.required),
        });
        break;
      case 4:
        this.dataEditDataForm = new FormGroup({
          id: new FormControl(this.naming[3].table.find(x => x.id === id).id, Validators.required),
          object_type: new FormControl(this.naming[3].table.find(x => x.id === id).object_type, Validators.required),
          kolvo_etashei_ot: new FormControl(this.naming[3].table.find(x => x.id === id).kolvo_etashei_ot, Validators.required),
          kolvo_etashei_do: new FormControl(this.naming[3].table.find(x => x.id === id).kolvo_etashei_do, Validators.required),
          etash_ot: new FormControl(this.naming[3].table.find(x => x.id === id).etash_ot, Validators.required),
          etash_do: new FormControl(this.naming[3].table.find(x => x.id === id).etash_do, Validators.required),
          kolvo_komnat_ot: new FormControl(this.naming[3].table.find(x => x.id === id).kolvo_komnat_ot, Validators.required),
          kolvo_komnat_do: new FormControl(this.naming[3].table.find(x => x.id === id).kolvo_komnat_do, Validators.required),
          ploshad_ot: new FormControl(this.naming[3].table.find(x => x.id === id).ploshad_ot, Validators.required),
          ploshad_do: new FormControl(this.naming[3].table.find(x => x.id === id).ploshad_do, Validators.required),
          stoimost_ot: new FormControl(this.naming[3].table.find(x => x.id === id).stoimost_ot, Validators.required),
          stoimost_do: new FormControl(this.naming[3].table.find(x => x.id === id).stoimost_do, Validators.required),
          actualnost: new FormControl(this.naming[3].table.find(x => x.id === id).actualnost, Validators.required),
          id_rayona: new FormControl(this.naming[3].table.find(x => x.id === id).id_rayona, Validators.required),
          id_goroda: new FormControl(this.naming[3].table.find(x => x.id === id).id_goroda, Validators.required),
          id_client: new FormControl(this.naming[3].table.find(x => x.id === id).id_client, Validators.required),
        });
        break;
      case 5:
        this.dataEditDataForm = new FormGroup({
          id: new FormControl(this.naming[4].table.find(x => x.id === id).id, Validators.required),
          id_predlozhenia: new FormControl(this.naming[4].table.find(x => x.id === id).id_predlozhenia, Validators.required),
          id_rieltora: new FormControl(this.naming[4].table.find(x => x.id === id).id_rieltora, Validators.required),
          id_tarifa: new FormControl(this.naming[4].table.find(x => x.id === id).id_tarifa, Validators.required),
          kolvo_let: new FormControl(this.naming[4].table.find(x => x.id === id).kolvo_let, Validators.required),
        });
        break;
      case 6:
        this.dataEditDataForm = new FormGroup({
          id: new FormControl(this.naming[5].table.find(x => x.id === id).id, Validators.required),
          object_type: new FormControl(this.naming[5].table.find(x => x.id === id).object_type, Validators.required),
          id_rayona: new FormControl(this.naming[5].table.find(x => x.id === id).id_rayona, Validators.required),
          id_goroda: new FormControl(this.naming[5].table.find(x => x.id === id).id_goroda, Validators.required),
          adres: new FormControl(this.naming[5].table.find(x => x.id === id).adres, Validators.required),
          kolvo_etashei: new FormControl(this.naming[5].table.find(x => x.id === id).kolvo_etashei, Validators.required),
          etash: new FormControl(this.naming[5].table.find(x => x.id === id).etash, Validators.required),
          kolvo_komnat: new FormControl(this.naming[5].table.find(x => x.id === id).kolvo_komnat, Validators.required),
          plozhad: new FormControl(this.naming[5].table.find(x => x.id === id).plozhad, Validators.required),
          xoz_postroyki: new FormControl(this.naming[5].table.find(x => x.id === id).xoz_postroyki, Validators.required),
          opisanie: new FormControl(this.naming[5].table.find(x => x.id === id).opisanie, Validators.required),
          stoimost: new FormControl(this.naming[5].table.find(x => x.id === id).stoimost, Validators.required),
          id_prodavca: new FormControl(this.naming[5].table.find(x => x.id === id).id_prodavca, Validators.required),
          actualnost: new FormControl(this.naming[5].table.find(x => x.id === id).actualnost, Validators.required),
        });
        break;
      case 7:
        this.dataEditDataForm = new FormGroup({
          id: new FormControl(this.naming[6].table.find(x => x.id === id).id, Validators.required),
          name: new FormControl(this.naming[6].table.find(x => x.id === id).name, Validators.required),
        });
        break;
      case 8:
        this.dataEditDataForm = new FormGroup({
          id: new FormControl(this.naming[7].table.find(x => x.id === id).id, Validators.required),
          name: new FormControl(this.naming[7].table.find(x => x.id === id).name, Validators.required),
          stavka_polgoda: new FormControl(this.naming[7].table.find(x => x.id === id).stavka_polgoda, Validators.required),
          stavka_god: new FormControl(this.naming[7].table.find(x => x.id === id).stavka_god, Validators.required),
          stavka_tri: new FormControl(this.naming[7].table.find(x => x.id === id).stavka_tri, Validators.required),
        });
        break;
      case 9:
        this.dataEditDataForm = new FormGroup({
          id: new FormControl(this.naming[8].table.find(x => x.id === id).id, Validators.required),
          id_kontrakta: new FormControl(this.naming[8].table.find(x => x.id === id).id_kontrakta, Validators.required),
          id_pokypatelia: new FormControl(this.naming[8].table.find(x => x.id === id).id_pokypatelia, Validators.required),
          date: new FormControl(this.naming[8].table.find(x => x.id === id).date, Validators.required),
          komissionie_agenty: new FormControl(this.naming[8].table.find(x => x.id === id).komissionie_agenty, Validators.required),
          proc_rieltora: new FormControl(this.naming[8].table.find(x => x.id === id).proc_rieltora, Validators.required),
          id_operachii: new FormControl(this.naming[8].table.find(x => x.id === id).id_operachii, Validators.required),
        });
        break;
    }
    this.modalReference = this.modalService.open(editMeta, {ariaLabelledBy: 'modal-basic-title'});
  }

  deleteData(index: number, id: number): void {
    switch (index) {
      case 1:
        this.activitiesService.deleteActivities(id);
        break;
      case 2:
        this.areasService.deleteAreas(id);
        break;
      case 3:
        this.citiesService.deleteCities(id);
        break;
      case 4:
        this.demandsService.deleteDemand(id);
        break;
      case 5:
        this.insurancesService.deleteInsurance(id);
        break;
      case 6:
        this.offersService.deleteOffers(id);
        break;
      case 7:
        this.rolesService.deleteRoles(id);
        break;
      case 8:
        this.tariffsService.deleteTariffs(id);
        break;
      case 9:
        this.transactionsService.deleteTransactions(id);
        break;
    }
    this.initData();
  }


  async initData() {
    try {
      this.activities = await this.activitiesService.getActivities();
      this.areas = await this.areasService.getAreas();
      this.cities = await this.citiesService.getCities();
      this.demands = await this.demandsService.getDemand();
      this.insurances = await this.insurancesService.getInsurance();
      this.offers = await this.offersService.getOffers();
      this.roles = await this.rolesService.getRoles();
      this.tariffs = await this.tariffsService.getTariffs();
      this.transactions = await this.transactionsService.getTransactions();
      this.naming = [{name: 'Activities', table: this.activities, fields: ['id', 'name'], uuid: 1},
                      {name: 'Areas', table: this.areas, fields: ['id', 'name'], uuid: 2},
                      {name: 'Cities', table: this.cities, fields: ['id', 'name'], uuid: 3},
                      {name: 'Demands', table: this.demands, fields: ['id', 'Object type', 'Amount floor from', 'Amount floor to', 'Floor from', 'Floor from', 'Rooms amount from', 'Rooms amount to', 'Area from', 'Area to', 'Cost from', 'Cost to', 'Actual', 'Area id', 'City id', 'Client id'], uuid: 4},
                      {name: 'Insurances', table: this.insurances, fields: ['id', 'Offer id', 'User id', 'Tariff id', 'Years'], uuid: 5},
                      {name: 'Offers', table: this.offers, fields: ['id', 'Object type', 'Area id', 'City id', 'Address', 'Floor amount', 'Floor', 'Rooms amount', 'Area', 'Buildings', 'Description', 'Cost', 'Seller id', 'Actually'], uuid: 6},
                      {name: 'Roles', table: this.roles, fields: ['id', 'name'], uuid: 7},
                      {name: 'Tariffs', table: this.tariffs, fields: ['id', 'name', 'Half at year', 'Year half', 'Three years'], uuid: 8},
                      {name: 'Transactions', table: this.transactions, fields: ['id', 'Offer id', 'Buyer id', 'Date', 'Agents', 'Percent seller', 'ID operation'], uuid: 9}
                    ];
      console.log(this.naming);
    } catch (error) {
      console.log(error);
    }
  }

}
