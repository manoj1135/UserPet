import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUtil } from 'src/app/common/CommonUtil';
import { Pet } from 'src/app/models/Pet';
import { AuthService } from 'src/app/services/auth.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-my-pet-list',
  templateUrl: './my-pet-list.component.html',
  styleUrls: ['./my-pet-list.component.css']
})
export class MyPetListComponent implements OnInit {

  constructor(private petService:PetService, private authService:AuthService, private commonUtil:CommonUtil, private router:Router) { }
  myPetList!: Pet[];
  displayedColumns: string[] = ['id', 'name', 'owner','buylink'];
  ngOnInit(): void {
    this.getAllMyPets();
  }

  getAllMyPets(){
    this.petService.getAllMyPets(this.authService.getLoggedInUserName())
    .subscribe(resp=>{
      this.myPetList = resp;
    })
  }

  sellPet(id:Number){
    this.petService.sellPet(id).subscribe(resp=>{
      this.commonUtil.showSnackBar("Successfully sold.");
      this.router.navigateByUrl("/myPets");
      this.ngOnInit();
    },err=>{
      console.error("Unable to sell ",err);
      this.commonUtil.showSnackBar("Failed to sell "+err.message);
    })
  }
}
