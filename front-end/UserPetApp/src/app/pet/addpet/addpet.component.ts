import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonUtil } from 'src/app/common/CommonUtil';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent implements OnInit {
  formGroup : FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    owner: new FormControl(""),
    isAvailable: new FormControl("true")
  });
  constructor(private petService:PetService, private commonUtil: CommonUtil, private router:Router) { }

  ngOnInit(): void {
  }

  addPet(){
    if(this.formGroup.valid){
      this.petService.addPet(this.formGroup.value).subscribe(resp=>{
        this.commonUtil.showSnackBar("Pet added successfully.");
        this.router.navigateByUrl("/pets");
      },err=>{
        console.error("Unable to save ",err);
        this.commonUtil.showSnackBar(err.message);
      })
    }
  }
}
