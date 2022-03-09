import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonUtil } from 'src/app/common/CommonUtil';
import { UserService } from 'src/app/services/user.service';
import { CustomValidator } from 'src/app/util/custom.validator';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formGroup : FormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),
  },
    CustomValidator.mustMatch('password', 'confirmPassword')
  );
  userId!: string;
  constructor(private userService:UserService, private router:Router, private commonUtil: CommonUtil, private activeRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params =>{
      this.userId = params['id'];
      this.getUser(parseInt(this.userId));
    })
  }

  getUser(id:Number){
    this.userService.getUserById(id).subscribe(resp=>{
      resp.confirmPassword="";
      this.formGroup.setValue(resp);
    })
  }

  saveUser(){
    if(this.formGroup.valid){
      this.userService.saveUser(this.formGroup.value)
      .subscribe(resp =>{
        console.log("add user ",resp);
        if(undefined != resp.error){
          this.commonUtil.showSnackBar(resp.error);
        }else{
          this.router.navigateByUrl("/users");
          this.commonUtil.showSnackBar("User modified successfully.");
        }
      },
      err =>{
        console.error("Modify User failed ",err);
        this.commonUtil.showSnackBar(err.message);
      });
    }}

}
