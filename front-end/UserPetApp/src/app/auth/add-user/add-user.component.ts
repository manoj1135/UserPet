import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidator } from 'src/app/util/custom.validator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formGroup : FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),
  },
    CustomValidator.mustMatch('password', 'confirmPassword')
  );
  constructor(private authService:AuthService, private router:Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  addUser(){
    if(this.formGroup.valid){
      this.authService.doRegister(this.formGroup.value)
      .subscribe(resp =>{
        console.log("add user ",resp);

        this.router.navigateByUrl("/home");
        this.snackBar.open("User added successfully.","Close",{duration:2000});
      },
      err =>{
        console.error("Add User failed ",err);
        this.snackBar.open(err.message,"Close",{duration:2000});
      });
    }
  }
}
