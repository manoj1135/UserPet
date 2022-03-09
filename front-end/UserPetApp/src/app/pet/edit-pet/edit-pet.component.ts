import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonUtil } from 'src/app/common/CommonUtil';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  formGroup:FormGroup = new FormGroup({
    id:new FormControl(""),
    name:new FormControl("",Validators.required),
    owner:new FormControl("")
  });
  constructor(private petService:PetService, private router:Router, private commonUtil:CommonUtil, private activeRouter:ActivatedRoute) { }
  petId!:string
  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe(param=>{
      this.petId = param["id"];
      this.getPet(this.petId);
    })
  }

  getPet(petId:any){
    this.petService.getPetById(petId).subscribe(resp=>{
      this.formGroup.setValue(resp);
    },err=>{
      console.error("Error ",err);
      this.commonUtil.showSnackBar(err.message);
    });
  }

  savePet(){
    if(this.formGroup.valid){
      this.petService.savePet(this.formGroup.value).subscribe(resp=>{
        this.commonUtil.showSnackBar("Modified pet successfully.");
        this.router.navigateByUrl("/pets");
      },err=>{
        console.error("Error ",err);
        this.commonUtil.showSnackBar(err.message);
      })
    }
  }

}
