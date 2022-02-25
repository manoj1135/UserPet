import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/Pet';
import { AuthService } from 'src/app/services/auth.service';
import { PetService } from 'src/app/services/pet.service';
import { getDefaultCompilerOptions } from 'typescript';

@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {

  constructor(private petService:PetService, private authService:AuthService, private snackBar:MatSnackBar, private router:Router) { }
  petList!: Pet[];
  displayedColumns: string[] = ['id', 'name', 'isAvailable', 'owner', 'buylink'];
  ngOnInit(): void {
    this.getAllPets();
  }

  getAllPets(){
    this.petService.getAllPets().subscribe(resp=>{
      console.log("pets ",resp);
      this.petList = resp;
    })
  }

  buyPet(id:Number){
    this.petService.buyPet({
      id:id,
      owner:this.authService.getLoggedInUserName()
    }).subscribe(resp=>{
      this.snackBar.open("Purchase success.","Close",{duration:2000});
      this.router.navigateByUrl("/home")
    })
  }

}
