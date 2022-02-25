import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Pet } from 'src/app/models/Pet';
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
  constructor(private petService:PetService, private snackBar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  addPet(){
    if(this.formGroup.valid){
      this.petService.addPet(this.formGroup.value).subscribe(resp=>{
        this.snackBar.open("Pet added successfully.","Close",{duration:2000});
        this.router.navigateByUrl("/home");
      },err=>{
        console.error("Unable to save ",err);
        this.snackBar.open(err.message,"Close",{duration:2000});
      })
    }
  }
}
