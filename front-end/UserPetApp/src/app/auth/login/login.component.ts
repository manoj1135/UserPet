import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  constructor(private authService:AuthService, private router:Router, private snackBar: MatSnackBar) { }

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
          this.snackBar.open(err.message,"Close",{duration:2000});
        });
    }
  }

}
