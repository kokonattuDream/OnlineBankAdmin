import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  sendCredential(username: string, password: string){
    let url = "http://localhost:8000/index";
    let params = 'username=' + username + '&password' + password;
    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    );

    return this.http.post(url, params, {headers: headers, withCredentials: true});
  }

  logout(){
    
    let url = "http://localhost:8000/logout";

    return this.http.get(url, { withCredentials: true});
  }
}
