import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class User{
  id!:Number;
  userName!:String;
	password!:String;
	firstName!:String;
	lastName!:String;
}
