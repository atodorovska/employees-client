import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  /*newClient(username: string, email: string, password: string) {

    if (username === '' || email === '' || password === '') {
      return;
    }

    const objBody = {
      'username' : username,
      'email' : email,
      'password' : password
    };
    console.log("post");
    this.http.post('/api/clients/catalogue/create', objBody).subscribe();
  }*/
}
