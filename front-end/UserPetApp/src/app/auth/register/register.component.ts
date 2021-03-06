import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonUtil } from 'src/app/common/CommonUtil';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidator } from 'src/app/util/custom.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup : FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),
  },
    CustomValidator.mustMatch('password', 'confirmPassword')
  );
  constructor(private authService:AuthService, private router:Router, private commonUtil: CommonUtil) { }

  ngOnInit(): void {
  }

  doRegister(){
    if(this.formGroup.valid){
      this.authService.doRegister(this.formGroup.value)
      .subscribe(resp =>{
        console.log("Register resp ",resp);
        this.commonUtil.showSnackBar("Registered successfully.");
        this.router.navigateByUrl("/(louginOutlet:login)");
      },
      err =>{
        this.commonUtil.showSnackBar(err.message);
        console.error("Registration failed ",err);
      });
    }
  }
}
