import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-up-nav',
  templateUrl: './up-nav.component.html',
  styleUrls: ['./up-nav.component.scss']
})
export class UpNavComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public logout(): void{
    this.userService.logout();
    if (!this.userService.getToken()){
      this.router.navigate(['/']);
    }
  }

}
