import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: Login;

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
    this.getLogin();
  }

  getLogin() {
    this.loginService.login().subscribe(result => this.login = result);
  }

  goToLoginView() {
    this.router.navigate(['/login']);
  }

}
