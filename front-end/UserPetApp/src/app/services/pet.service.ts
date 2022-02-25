import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Pet } from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    })
  };
  constructor(private httpClient:HttpClient) { }

  getAllPets():Observable<any>{
    return this.httpClient.get(
      `${baseUrl}/pets/`,
      this.httpOptions
    );
  }

  addPet(data:Pet){
    return this.httpClient.post(
      `${baseUrl}/pets/`,
      data,
      this.httpOptions
    );
  }

  buyPet(data:any){
    return this.httpClient.put(
      `${baseUrl}/pets/buyPet`,
      data,
      this.httpOptions
    );
  }

  getAllMyPets(userName:String):Observable<any>{
    return this.httpClient.get(
      `${baseUrl}/users/myPets/${userName}`
    );
  }

  sellPet(petId:Number){
    return this.httpClient.post(
      `${baseUrl}/pets/sellPet/${petId}`,
      {},
      this.httpOptions
    );
  }
}
