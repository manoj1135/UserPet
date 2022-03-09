import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonUtil } from 'src/app/common/CommonUtil';
import { UserService } from 'src/app/services/user.service';
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
  constructor(private userService:UserService, private router:Router, private commonUtil: CommonUtil) { }

  ngOnInit(): void {
  }
  addUser(){
    if(this.formGroup.valid){
      this.userService.addUser(this.formGroup.value)
      .subscribe(resp =>{
        console.log("add user ",resp);
        if(undefined != resp.error){
          this.commonUtil.showSnackBar(resp.error);
        }else{
          this.router.navigateByUrl("/users");
          this.commonUtil.showSnackBar("User added successfully.");
        }
      },
      err =>{
        console.error("Add User failed ",err);
        this.commonUtil.showSnackBar(err.message);
      });
    }
  }
}
