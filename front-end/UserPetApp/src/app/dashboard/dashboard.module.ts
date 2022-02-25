import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetModule } from 'src/app/pet/pet.module';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { PetlistComponent } from './petlist/petlist.component'
import { MaterialModules } from '../material.modules';


@NgModule({
  declarations: [
    HomescreenComponent,
    PetlistComponent
  ],
  imports: [
    CommonModule,
    PetModule,
    MaterialModules
  ]
})
export class DashboardModule { }
