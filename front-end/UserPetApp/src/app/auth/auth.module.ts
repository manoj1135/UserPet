import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModules } from 'src/app/material.modules';
import { LoginComponent } from './login/login.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotpwComponent,
    ResetpwComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModules,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AuthModule { }
