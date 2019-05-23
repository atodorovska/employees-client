import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from '../../../node_modules/rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {Login} from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlLogin = '/api/user';

  constructor(private http: HttpClient) {
  }

  login(): Observable<Login> {
    return this.http.get<any>(`${this.urlLogin}`)
      .pipe(map(obj => {
        return new Login(obj.userAuthentication.details.id != null ?
          obj.userAuthentication.details.id : obj.userAuthentication.details.sub,
          obj.userAuthentication.details.login != null ?
            obj.userAuthentication.details.login : obj.userAuthentication.details.name);
      }));
  }

}
