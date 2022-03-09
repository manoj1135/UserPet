import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpwComponent } from './auth/forgotpw/forgotpw.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomescreenComponent } from './dashboard/homescreen/homescreen.component';
import { PetlistComponent } from './dashboard/petlist/petlist.component';
import { AddpetComponent } from './pet/addpet/addpet.component';
import { EditPetComponent } from './pet/edit-pet/edit-pet.component';
import { MyPetListComponent } from './pet/my-pet-list/my-pet-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {path:"", redirectTo:"/(louginOutlet:login)", pathMatch:"full"},
  {path:"login", component:LoginComponent, outlet:"louginOutlet"},
  {path:"register", component:RegisterComponent, outlet:"louginOutlet"},
  {path:"forgotPw", component:ForgotpwComponent, outlet:"louginOutlet"},
  {path:"home",component:HomescreenComponent},
  {path:"users",component:UserListComponent},
  {path:"pets",component:PetlistComponent},
  {path:"addUser",component:AddUserComponent},
  {path:"editUser",component:EditUserComponent},
  {path:"addPet",component:AddpetComponent},
  {path:"editPet",component:EditPetComponent},
  {path:"myPets",component:MyPetListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
