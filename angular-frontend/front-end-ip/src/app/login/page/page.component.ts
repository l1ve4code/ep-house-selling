/* tslint:disable:no-unused-expression quotemark */
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  userAuthForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.createAuthForm();
    if (this.userService.getToken()){
      this.router.navigate(['/']);
    }
  }

  private createAuthForm(): void {
    this.userAuthForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  public getUniqueToken(): void {
    // tslint:disable-next-line:object-literal-key-quotes
    this.userService.login({'username': this.userAuthForm.get('username').value, 'password': this.userAuthForm.get('password').value});
  }

}
