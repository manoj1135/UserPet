import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpetComponent } from './addpet/addpet.component';
import { MaterialModules } from '../material.modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MyPetListComponent } from './my-pet-list/my-pet-list.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';



@NgModule({
  declarations: [
    AddpetComponent,
    MyPetListComponent,
    EditPetComponent
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
export class PetModule { }
