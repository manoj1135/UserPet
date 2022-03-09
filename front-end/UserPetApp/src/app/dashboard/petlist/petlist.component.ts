import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonUtil } from 'src/app/common/CommonUtil';
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

  constructor(private petService:PetService, private authService:AuthService, private snackBar:MatSnackBar, private router:Router, private commonUtil:CommonUtil) { }
  petList!: Pet[];
  displayedColumns: string[] = ['id', 'name', 'isAvailable', 'owner', 'buylink','actions'];
  ngOnInit(): void {
    this.getAllPets();
  }

  getAllPets(){
    this.petService.getAllPets().subscribe(resp=>{
      this.petList = resp;
    })
  }

  addPet(){
    this.router.navigateByUrl("/addPet");
  }

  editPet(id:Number){
    this.router.navigate(["/editPet"],{queryParams:{id:id}});
  }

  deletePet(id:Number){
    this.petService.deletePet(id).subscribe(resp=>{
      this.commonUtil.showSnackBar("Pet deleted successfully.");
      this.ngOnInit();
    },err=>{
      console.error("Error ",err);
      this.commonUtil.showSnackBar(err.message);
    })
  }

  buyPet(id:Number){
    this.petService.buyPet({
      id:id,
      owner:this.authService.getLoggedInUserName()
    }).subscribe(resp=>{
      this.commonUtil.showSnackBar("Purchase success.");
      this.router.navigateByUrl("/pets");
      this.ngOnInit();
    })
  }

}
