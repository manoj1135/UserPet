import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    })
  };
  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.httpClient.get(
      `${baseUrl}/users/`,
      this.httpOptions
    );
  }

  addUser(data:User):Observable<any>{
    return this.httpClient.post(
      `${baseUrl}/users/register`,
      data,
      this.httpOptions
    );
  }

  saveUser(data:User):Observable<any>{
    return this.httpClient.put(
      `${baseUrl}/users/`,
      data,
      this.httpOptions
    )
  }

  deleteUser(id:Number):Observable<any>{
    return this.httpClient.delete(
      `${baseUrl}/users/`+id,
      this.httpOptions
    );
  }

  getUserById(id:Number):Observable<any>{
    return this.httpClient.get(
      `${baseUrl}/users/`+id
    );
  }

}
