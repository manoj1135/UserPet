import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { MaterialModules } from '../material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AddUserComponent,
    UserListComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModules,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
