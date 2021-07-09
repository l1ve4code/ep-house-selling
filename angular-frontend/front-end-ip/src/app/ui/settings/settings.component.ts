/* tslint:disable:no-trailing-whitespace triple-equals quotemark max-line-length */
import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../services/user/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userEditDataForm: FormGroup;

  users: User[] = [];

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.createEditDataForm();
    if (!this.userService.getToken()){
      this.router.navigate(['/']);
    }
  }

  private createEditDataForm(): void {
    this.userEditDataForm = new FormGroup({
      name: new FormControl(this.userService.getName(), Validators.required),
      familia: new FormControl(this.userService.getSurname(), Validators.required),
      login: new FormControl(this.userService.getUsername(), Validators.required),
      password: new FormControl('', Validators.required),
      re_password: new FormControl('', Validators.required),
    });
    this.initData();
  }

  public updateUserData(): void{
    try {
      // tslint:disable-next-line:prefer-const
      let userData = this.users.find(user => user.login === this.userService.getUsername());

      const userId = userData.id;

      if (this.userEditDataForm.get('password').value == this.userEditDataForm.get('re_password').value && userData.password == this.userEditDataForm.get('re_password').value) {

        userData.name = this.userEditDataForm.get('name').value;
        userData.familia = this.userEditDataForm.get('familia').value;
        userData.login = this.userEditDataForm.get('login').value;

        this.userService.updateUsers(userId, userData);

        this.router.navigate(['/']);

        this.userService.logout();

      }

    }
    catch (e) {
      console.log(e);
    }

  }

  public clearFormData(): void{
    this.userEditDataForm.reset();
  }

  async initData() {
    try {
      this.users = await this.userService.getUsers();
    } catch (error) {
      console.log(error);
    }
  }

}
