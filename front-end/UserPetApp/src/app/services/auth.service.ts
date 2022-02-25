import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    })
  };

  constructor(private httpClient:HttpClient, private user:User) { }

  setAuth(data: User | undefined){
    if(undefined != data){
      this.user = data;
    }
  }

  getAuth():User{
    return this.user;
  }

  getLoggedInUserName():String{
    return !this.getAuth().userName?"Guest":this.getAuth().userName;
  }

  doLogin(data:User):Observable<any>{
    return this.httpClient.post(
      `${baseUrl}/users/login`,
      data,
      this.httpOptions
    );
  }

  doRegister(data:User):Observable<any>{
    return this.httpClient.post(
      `${baseUrl}/users/register`,
      data,
      this.httpOptions
    );
  }
}
