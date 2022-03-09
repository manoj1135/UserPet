import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonUtil } from 'src/app/common/CommonUtil';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted=false;
  formGroup : FormGroup = new FormGroup({
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  constructor(private authService:AuthService, private router:Router, private commonUtil: CommonUtil) { }

  ngOnInit(): void {
  }

  doLogin(){
    if(this.formGroup.valid){
      this.isSubmitted = true;
      this.authService.doLogin(this.formGroup.value).
        subscribe(resp =>{
          this.isSubmitted = false;
          this.authService.setAuth(resp);
          this.router.navigateByUrl("/home");
        }, err=>{
          this.isSubmitted = false;
          console.error("Error ",err);
          this.commonUtil.showSnackBar(err.message);
        });
    }
  }

}
